import Axios from 'axios';
import { mergeRight } from 'ramda';
import Config from 'react-native-config';

import { tokensSelector } from 'state/concepts/session/selectors';
import { setTokens } from 'state/concepts/session/actions';
import { clientsSessionRefreshRoute } from '../apiRoutes';
import setHttpClientToken from './setHttpClientToken';
import createAccessToken from './createAccessToken';

const refreshInterceptor = (store) => {
  let requestsPool = [];
  let isRefreshing = false;
  const subscribeToRefresh = (listener) => requestsPool.push(listener);
  const finishRefresh = (accessToken) => {
    requestsPool.map((listener) => listener(accessToken));
    isRefreshing = false;
    requestsPool = [];
  };

  return async (error) => {
    const retryConfig = error.response && error.response.config;

    if (error.response && retryConfig && error.response.status === 401) {
      const defferedOriginalRequest = new Promise((resolve, reject) => {
        // eslint-disable-next-line consistent-return
        subscribeToRefresh((accessToken) => {
          if (!accessToken) { return reject(error); }

          retryConfig.headers.Authorization = accessToken;
          resolve(Axios.request(retryConfig));
        });
      });

      if (isRefreshing) { return defferedOriginalRequest; }

      try {
        isRefreshing = true;
        const state = store.getState();
        const tokens = tokensSelector(state);
        const response = await Axios.post(`${Config.API_HOST}/api/v1/workspaces${clientsSessionRefreshRoute(tokens.workspaceId)}`, {}, { headers: { 'X-Refresh-Token': tokens.refresh } });

        const { jwt } = response.data.meta;
        store.dispatch(setTokens(mergeRight(tokens, jwt)));
        const newAuthHeader = createAccessToken(jwt.access);
        setHttpClientToken(store.httpClient, newAuthHeader);
        finishRefresh(newAuthHeader);
      } catch {
        setHttpClientToken(store.httpClient, null);
        finishRefresh(null);
      }

      return defferedOriginalRequest;
    }

    return Promise.reject(error);
  };
};

export default refreshInterceptor;
