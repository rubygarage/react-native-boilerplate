export default (httpClient, accessToken) => {
  // eslint-disable-next-line no-param-reassign
  httpClient.defaults.headers.common.Authorization = accessToken;
};
