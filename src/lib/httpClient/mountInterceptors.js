import { isEmpty } from 'ramda';

import refreshInterceptor from './refreshInterceptor';
import workspaceIdInterceptor from './workspaceIdInterceptor';

// run from App.js to add interceptor for authorization token expiration error, etc.,
const mountInterceptors = (store) => {
  if (!isEmpty(store.httpClient.interceptors.response.handlers)) return;

  store.httpClient.interceptors.response.use(null, refreshInterceptor(store));
  store.httpClient.interceptors.request.use(workspaceIdInterceptor(store), null);
};

export default mountInterceptors;
