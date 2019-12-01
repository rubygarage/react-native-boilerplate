import mountInterceptors from '../mountInterceptors';
import refreshInterceptor from '../refreshInterceptor';
import workspaceIdInterceptor from '../workspaceIdInterceptor';

jest.mock('../refreshInterceptor', () => jest.fn(() => 'refresh interceptor mock'));

jest.mock('../workspaceIdInterceptor', () => jest.fn(() => 'workspace id interceptor mock'));

describe('mountInterceptors()', () => {
  const prepareStore = (handlers) => ({
    httpClient: {
      interceptors: {
        response: {
          handlers,
          use: jest.fn(),
        },
        request: {
          handlers,
          use: jest.fn(),
        },
      },
    },
  });

  it('returns early if interceptors are attached', () => {
    const store = prepareStore([jest.fn()]);
    mountInterceptors(store);

    expect(refreshInterceptor).not.toHaveBeenCalled();
    expect(store.httpClient.interceptors.response.use).not.toHaveBeenCalled();
  });

  it('attaches refresh interceptor', () => {
    const store = prepareStore([]);
    mountInterceptors(store);

    expect(refreshInterceptor).toHaveBeenCalledWith(store);
    expect(store.httpClient.interceptors.response.use).toHaveBeenCalledWith(null, 'refresh interceptor mock');
  });

  it('attaches workspace id interceptor', () => {
    const store = prepareStore([]);
    mountInterceptors(store);

    expect(workspaceIdInterceptor).toHaveBeenCalledWith(store);
    expect(store.httpClient.interceptors.request.use).toHaveBeenCalledWith('workspace id interceptor mock', null);
  });
});
