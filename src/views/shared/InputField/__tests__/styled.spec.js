import React from 'react';

import renderStyled from 'utils/testHelpers/renderStyled';
import * as S from '../styled';

describe('Wrap styled components', () => {
  describe('S.Wrap matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.Wrap color />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.Label matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.Label />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.FieldWrap matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.FieldWrap />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.Field matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.Field />);
      expect(wrapper).toMatchSnapshot();
    });

    it('error', () => {
      const wrapper = renderStyled(<S.Field isError />);
      expect(wrapper).toMatchSnapshot();
    });

    it('focused', () => {
      const wrapper = renderStyled(<S.Field isFocused />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.FieldError matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.FieldError />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.FieldErrorClose matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.FieldErrorClose />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.FieldErrorMessage matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.FieldErrorMessage />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.ActionButtonWrapper matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.ActionButtonWrapper />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
