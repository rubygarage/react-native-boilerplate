import React from 'react';
import { View } from 'react-native';
import renderStyled from 'utils/testHelpers/renderStyled';

import * as S from '../styled';

jest.useFakeTimers();

// Fix: react-native-popover-view has problems with RN > 0.62.*
jest.mock('react-native-popover-view', () => 'View');

describe('Popover styled components', () => {
  describe('S.Popover matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.Popover><View /></S.Popover>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
