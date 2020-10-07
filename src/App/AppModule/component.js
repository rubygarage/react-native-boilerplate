import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import theme from 'constants/theme';

import AppNavigator from '../navigation/AppNavigator';
import ModalRoot from '../../views/ModalRoot';

import useContainer from './hook';

const AppModuleComponent = () => {
  useContainer();

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <AppNavigator />
        <ModalRoot />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default AppModuleComponent;
