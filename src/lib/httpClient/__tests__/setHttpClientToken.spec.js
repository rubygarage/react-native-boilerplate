import setHttpClientToken from '../setHttpClientToken';

describe('setHttpClientToken()', () => {
  const httpClient = {
    defaults: {
      headers: {
        common: { Authorization: '' },
      },
    },
  };

  it('sets token', () => {
    const authToken = 'existing token';
    setHttpClientToken(httpClient, authToken);

    expect(httpClient.defaults.headers.common.Authorization).toEqual(authToken);
  });
});
