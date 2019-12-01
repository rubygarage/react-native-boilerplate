import React from 'react';

import renderStyled from 'utils/testHelpers/renderStyled';
import * as S from '../styled';

describe('FlashRoot styled components', () => {
  describe('S.List matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.List topInset={20} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
