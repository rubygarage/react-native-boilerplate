import Config from 'react-native-config';

import { tokensSelector } from 'state/concepts/session/selectors';

export default (store) => (config) => {
  const state = store.getState();
  const { workspaceId } = tokensSelector(state);
  // eslint-disable-next-line no-param-reassign
  config.baseURL = `${Config.API_HOST}/api/v1/workspaces/${workspaceId}`;
  return config;
};
