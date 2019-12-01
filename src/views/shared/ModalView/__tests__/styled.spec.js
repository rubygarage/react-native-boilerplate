import React from 'react';
import renderStyled from 'utils/testHelpers/renderStyled';

import * as S from '../styled';

describe('ModalView styled components', () => {
  describe('S.Overlay matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.Overlay />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.Container matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.Container />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
