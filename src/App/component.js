import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { IntlProvider } from 'react-intl-redux';

import configureStore from 'state/configureStore';
import AppModule from './AppModule';

window.navigator.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) ReactNativeDebugger/0.10.5 Chrome/78.0.3904.113 Electron/7.1.2 Safari/537.36';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IntlProvider>
        <AppModule />
      </IntlProvider>
    </PersistGate>
  </Provider>
);

export default App;
