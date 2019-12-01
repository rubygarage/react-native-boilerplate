import React from 'react';
import renderStyled from 'utils/testHelpers/renderStyled';

import * as S from '../styled';

describe('Picker styled components', () => {
  describe('S.PickerView matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.PickerView />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.PickerValueWrap matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.PickerValueWrap />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.PickerValue matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.PickerValue />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
