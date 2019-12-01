import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import InitialScreen from 'views/InitialScreen';
import HomeScreen from 'views/HomeScreen';
import StubsScreen from 'stubs/StubsScreen';
import stubs from 'stubs/stubs';

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Stubs: {
    screen: StubsScreen,
  },
  ...stubs,
});

const ModalAppStack = createStackNavigator({
  MainStack: {
    screen: AppStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
  cardStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    opacity: 1,
  },
});

const AppNavigator = createSwitchNavigator(
  {
    Initial: InitialScreen,
    App: ModalAppStack,
  },
  {
    initialRouteName: 'Initial',
  },
);

export default createAppContainer(AppNavigator);
