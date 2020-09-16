import React from 'react';
import { View } from 'react-native';
import renderStyled from 'utils/testHelpers/renderStyled';

import * as S from '../styled';

jest.useFakeTimers();

describe('Popover styled components', () => {
  describe('S.Popover matches snapshot', () => {
    it.skip('default', () => {
      const wrapper = renderStyled(<S.Popover><View /></S.Popover>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
