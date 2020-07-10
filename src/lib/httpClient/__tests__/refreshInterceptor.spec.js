import Axios from 'axios';
import Config from 'react-native-config';

import refreshInterceptor from '../refreshInterceptor';
import setHttpClientToken from '../setHttpClientToken';
import createAccessToken from '../createAccessToken';

const mockRetryRequest = (config) => ({ mock: 'retried request', config });
jest.mock('axios', () => ({
  request: jest.fn((config) => mockRetryRequest(config)),
  post: jest.fn(),
}));

const mockAccessToken = 'access token mock';
const mockRefreshToken = 'refresh token mock';
const mockWorkspaceId = '301';
jest.mock('state/concepts/session/selectors', () => ({
  tokensSelector: jest.fn(() => ({
    access: mockAccessToken, refresh: mockRefreshToken, workspaceId: mockWorkspaceId,
  })),
}));
const mockDispatch = jest.fn();
jest.mock('../setHttpClientToken', () => jest.fn());
const mockToken = 'mockToken';
jest.mock('../createAccessToken', () => jest.fn(() => mockToken));

describe('refreshInterceptor() creates interceptor that', () => {
  const store = {
    dispatch: mockDispatch,
    getState: jest.fn(),
    httpClient: {
      defaults: {
        headers: {
          common: {
            Authorization: 'old token',
          },
        },
      },
    },
  };
  const makeError = (status, url = 'url') => ({
    response: {
      config: {
        headers: {
          Authorization: 'old token',
          url,
        },
      },
      status,
    },
  });

  beforeEach(() => {
    Axios.post.mockClear();
    Axios.request.mockClear();
  });

  const refreshResponse = {
    data: { meta: { jwt: { access: 'new access token' } } },
  };

  describe('returns rejected Promise with error', () => {
    const interceptorInstance = refreshInterceptor(store);

    it('when error.response is not defined', () => {
      const error = {};

      expect(interceptorInstance(error)).rejects.toEqual(error);
    });

    it('when error.response.config is not defined', () => {
      const error = { response: {} };

      expect(interceptorInstance(error)).rejects.toEqual(error);
    });

    it('when error.response.status is other than 401', () => {
      const error = makeError(422);

      expect(interceptorInstance(error)).rejects.toEqual(error);
    });
  });

  it('deffers request, refreshes token, and retry request', async () => {
    const error = makeError(401);
    const interceptorInstance = refreshInterceptor(store);

    Axios.post.mockImplementationOnce(() => Promise.resolve(refreshResponse));
    Axios.request.mockImplementationOnce((config) => ({ mock: 'retried request', config }));
    await expect(interceptorInstance(error)).resolves
      .toEqual(mockRetryRequest(error.response.config));

    expect(Axios.post).toHaveBeenCalledWith(`${Config.API_HOST}/api/v1/workspaces/${mockWorkspaceId}/clients/session/refresh`, {}, { headers: { 'X-Refresh-Token': mockRefreshToken } });
    expect(createAccessToken).toHaveBeenCalledWith(refreshResponse.data.meta.jwt.access);
    expect(setHttpClientToken).toHaveBeenCalledWith(store.httpClient, mockToken);
    expect(Axios.request).toHaveBeenCalledWith(error.response.config);
  });

  it('deffers several requests, refreshes token once, and retry all deffered requests', async () => {
    const requestErrors = [makeError(401, '1'), makeError(401, '2'), makeError(401, '3')];
    const interceptorInstance = refreshInterceptor(store);

    let resolveRefreshRequest;
    const makeResolveRefreshRequest = (resolve) => () => resolve(refreshResponse);
    const refreshRequestPromise = new Promise((resolve) => {
      resolveRefreshRequest = makeResolveRefreshRequest(resolve);
    });

    Axios.post.mockImplementationOnce(() => refreshRequestPromise);

    const requestExpectations = requestErrors.map((requestError) => expect(
      interceptorInstance(requestError),
    ).resolves.toEqual(mockRetryRequest(requestError.response.config)));

    resolveRefreshRequest();

    await Promise.all(requestExpectations);

    expect(Axios.post).toHaveBeenCalledTimes(1);
    expect(Axios.post).toHaveBeenCalledWith(`${Config.API_HOST}/api/v1/workspaces/${mockWorkspaceId}/clients/session/refresh`, {}, { headers: { 'X-Refresh-Token': mockRefreshToken } });
    expect(createAccessToken).toHaveBeenCalledWith(refreshResponse.data.meta.jwt.access);
    expect(setHttpClientToken).toHaveBeenCalledWith(store.httpClient, mockToken);
    expect(Axios.request).toHaveBeenCalledTimes(3);
    requestErrors.forEach((requestError, index) => {
      expect(requestError.response.config.headers.Authorization).toEqual(mockToken);
      expect(Axios.request).toHaveBeenNthCalledWith(index + 1, requestError.response.config);
    });
  });

  it('fails several requests requests, as the refreshes token request fails, and removes cookies and current token, redirects to login', async () => {
    const requestErrors = [makeError(401, '1'), makeError(401, '2'), makeError(401, '3')];
    const interceptorInstance = refreshInterceptor(store);

    let rejectRefreshRequest;
    const makeRejectRefreshRequest = (reject) => () => reject(refreshResponse);
    const refreshRequestPromise = new Promise((resolve, reject) => {
      rejectRefreshRequest = makeRejectRefreshRequest(reject);
    });

    Axios.post.mockImplementationOnce(() => refreshRequestPromise);

    const requestExpectations = requestErrors.map((requestError) => expect(
      interceptorInstance(requestError),
    ).rejects.toEqual(requestError));

    rejectRefreshRequest();

    await Promise.all(requestExpectations);

    expect(Axios.post).toHaveBeenCalledTimes(1);
    expect(Axios.post).toHaveBeenCalledWith(`${Config.API_HOST}/api/v1/workspaces/${mockWorkspaceId}/clients/session/refresh`, {}, { headers: { 'X-Refresh-Token': mockRefreshToken } });
    expect(setHttpClientToken).toHaveBeenCalledWith(store.httpClient, null);
    expect(Axios.request).toHaveBeenCalledTimes(0);
  });

  it('refresh tokens for current client requests', async () => {
    const error = makeError(401);
    const interceptorInstance = refreshInterceptor(store);

    Axios.post.mockImplementationOnce(() => Promise.resolve(refreshResponse));
    Axios.request.mockImplementationOnce((config) => ({ mock: 'retried request', config }));
    await expect(interceptorInstance(error)).resolves
      .toEqual(mockRetryRequest(error.response.config));

    expect(Axios.post).toHaveBeenCalledWith(`${Config.API_HOST}/api/v1/workspaces/${mockWorkspaceId}/clients/session/refresh`, {}, { headers: { 'X-Refresh-Token': mockRefreshToken } });
    expect(createAccessToken).toHaveBeenCalledWith(refreshResponse.data.meta.jwt.access);
    expect(setHttpClientToken).toHaveBeenCalledWith(store.httpClient, mockToken);
    expect(error.response.config.headers.Authorization).toEqual(mockToken);
    expect(Axios.request).toHaveBeenCalledWith(error.response.config);
  });
});
