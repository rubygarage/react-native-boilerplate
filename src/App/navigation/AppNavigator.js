import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from 'views/InitialScreen';
import HomeScreen from 'views/HomeScreen';
import StubsScreen from 'stubs/StubsScreen';
import stubs from 'stubs/stubs';
import { navigationRef } from 'lib/services/NavigationService';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator>
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Stubs" component={StubsScreen} />
      {Object.keys(stubs).map((key) => (
        <Stack.Screen key={key} name={key} component={stubs[key]} />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);
