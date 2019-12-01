import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist';
import { Settings } from 'luxon';
import AsyncStorage from '@react-native-community/async-storage';

import buildHttpClient from 'lib/httpClient';
import { rootHttpClient } from 'lib/httpClient/buildHttpClient';
import mountInterceptors from 'lib/httpClient/mountInterceptors';
import conceptsOperations from './concepts/operationsRoot';
import flashOperations from './flash/operations';
import rootReducer from './store';

const operations = [...conceptsOperations, ...flashOperations];

const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['data', 'application'],
    timeout: null,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const operationsDependencies = {
    httpClient: buildHttpClient(),
    rootHttpClient,
  };

  const logicMiddleware = createLogicMiddleware(operations, operationsDependencies);
  const middlewares = applyMiddleware(logicMiddleware);
  const enhancer = composeWithDevTools(middlewares);

  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  store.logicMiddleware = logicMiddleware;
  store.httpClient = operationsDependencies.httpClient;

  mountInterceptors(store);

  if (module.hot) {
    module.hot.accept(() => {
      // eslint-disable-next-line global-require
      store.replaceReducer(require('./store').default);
    });
  }

  Settings.defaultLocale = store.getState().intl.locale;

  return { store, persistor };
};

export default configureStore;
