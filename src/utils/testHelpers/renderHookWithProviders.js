/* eslint-disable import/no-extraneous-dependencies */
import { renderHook } from '@testing-library/react-hooks';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import mockedTheme from 'utils/testHelpers/mockedTheme';

const store = configureStore()({});
store.dispatch = jest.fn();

const renderHookWithProviders = (hook) => {
  const wrapper = ({ children }) => (
    <Provider store={store}>
      <ThemeProvider theme={mockedTheme}>
        {children}
      </ThemeProvider>
    </Provider>
  );

  return renderHook(hook, { wrapper });
};

export default renderHookWithProviders;
