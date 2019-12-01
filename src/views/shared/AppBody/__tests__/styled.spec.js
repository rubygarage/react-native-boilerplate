import React from 'react';
import { View } from 'react-native';

import renderStyled from 'utils/testHelpers/renderStyled';
import AppBody from '../styled';

describe('AppBody styled component', () => {
  it('renders corectly default', () => {
    const wrapper = renderStyled(<AppBody><View /></AppBody>);
    expect(wrapper).toMatchSnapshot();
  });
});
