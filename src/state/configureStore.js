/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist';
import { Settings } from 'luxon';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';

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
  let middlewares = [];

  // eslint-disable-next-line
  if (__DEV__ && !global.__TEST__) {
    const loggerMiddleware = createLogger({
      predicate: () => Boolean(window.navigator.userAgent),
      collapsed: true,
      duration: true,
    });

    middlewares = applyMiddleware(logicMiddleware, loggerMiddleware);
  } else {
    middlewares = applyMiddleware(logicMiddleware);
  }

  // Create enhancer.
  const enhancer = __DEV__
    ? composeWithDevTools(middlewares)
    : middlewares;

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
