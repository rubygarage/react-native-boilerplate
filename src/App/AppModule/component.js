import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from '../navigation/AppNavigator';
import ModalRoot from '../../views/ModalRoot';

const AppModuleComponent = ({ theme, handleNavRef }) => (
  <ThemeProvider theme={theme}>
    <SafeAreaProvider>
      <AppNavigator ref={handleNavRef} />
      <ModalRoot />
    </SafeAreaProvider>
  </ThemeProvider>
);

AppModuleComponent.propTypes = {
  theme: PropTypes.shape().isRequired,
  handleNavRef: PropTypes.func.isRequired,
};

export default AppModuleComponent;
