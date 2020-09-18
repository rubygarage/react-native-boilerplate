import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from '../navigation/AppNavigator';
import ModalRoot from '../../views/ModalRoot';

const AppModuleComponent = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <SafeAreaProvider>
      <AppNavigator />
      <ModalRoot />
    </SafeAreaProvider>
  </ThemeProvider>
);

AppModuleComponent.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default AppModuleComponent;
