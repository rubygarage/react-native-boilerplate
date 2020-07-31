import Axios from 'axios';
import qs from 'qs';
import Config from 'react-native-config';

const httpClientParams = {
  // workaround for axios bug https://github.com/axios/axios/issues/1664#issuecomment-415492981
  headers: {
    common: {},
  },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'brackets' }),
};

const buildHttpClient = () => Axios.create({
  baseURL: `${Config.API_HOST}/api/v1`,
  ...httpClientParams,
});

const rootHttpClient = Axios.create({
  baseURL: `${Config.API_HOST}/api/v1/workspaces`,
  ...httpClientParams,
});

export { rootHttpClient };
export default buildHttpClient;
