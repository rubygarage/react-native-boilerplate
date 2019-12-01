import React from 'react';

import renderStyled from 'utils/testHelpers/renderStyled';
import ModalText from '../styled';

describe('ModalText styled components', () => {
  describe('S.Text matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<ModalText>Test text</ModalText>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
