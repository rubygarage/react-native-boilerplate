import { AppRegistry } from 'react-native';
import Config from 'react-native-config';
import * as Sentry from '@sentry/react-native';
import 'react-native-gesture-handler';

import App from './src/App';
import { name as appName } from './app.json';

if (!__DEV__) {
  Sentry.init({
    dsn: Config.SENTRY_DSN,
  });
}

AppRegistry.registerComponent(appName, () => App);
