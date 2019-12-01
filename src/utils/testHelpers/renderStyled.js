import React from 'react';
import { ThemeProvider } from 'styled-components/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';

import theme from 'constants/theme';

const renderStyled = (tree) => renderer.create(
  <ThemeProvider theme={theme}>
    {tree}
  </ThemeProvider>,
);

export default renderStyled;
