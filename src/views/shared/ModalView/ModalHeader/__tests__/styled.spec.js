import React from 'react';

import renderStyled from 'utils/testHelpers/renderStyled';
import * as S from '../styled';

describe('ModalHeader styled components', () => {
  describe('S.Wrap matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.Wrap />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.Title matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.Title />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.Close matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.Close />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
