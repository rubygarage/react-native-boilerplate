/* eslint-disable no-underscore-dangle, import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider, ThemeConsumer } from 'styled-components/native';
import { shallow } from 'enzyme';

import mockedTheme from './mockedTheme';

export default (tree) => {
  // For styled-components 5.*
  ThemeConsumer._currentValue = mockedTheme;

  return shallow(
    <ThemeProvider theme={mockedTheme}>
      {tree}
    </ThemeProvider>,
  );
};
