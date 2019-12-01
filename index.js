import { AppRegistry } from 'react-native';
import { SENTRY_DSN } from 'react-native-dotenv';
import * as Sentry from '@sentry/react-native';

import App from './src/App';
import { name as appName } from './app.json';

// eslint-disable-next-line no-undef
if (!__DEV__) {
  Sentry.init({
    dsn: SENTRY_DSN,
  });
}

AppRegistry.registerComponent(appName, () => App);
