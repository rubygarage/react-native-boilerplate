import React from 'react';
import { ThemeProvider } from 'styled-components/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { shallow } from 'enzyme';

import mockedTheme from './mockedTheme';

export default (tree) => shallow(
  <ThemeProvider theme={mockedTheme}>
    {tree}
  </ThemeProvider>,
);
