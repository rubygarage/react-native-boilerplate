import React from 'react';

import renderStyled from 'utils/testHelpers/renderStyled';
import * as S from '../styled';

describe('ModalIconArea styled components', () => {
  describe('S.Wrap matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.Wrap />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.Icon matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.Icon />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.Text matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.Text />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
