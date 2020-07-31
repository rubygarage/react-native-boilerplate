import { AppRegistry } from 'react-native';
import Config from 'react-native-config';
import * as Sentry from '@sentry/react-native';

import App from './src/App';
import { name as appName } from './app.json';

// eslint-disable-next-line no-undef
if (!__DEV__) {
  Sentry.init({
    dsn: Config.SENTRY_DSN,
  });
}

AppRegistry.registerComponent(appName, () => App);
