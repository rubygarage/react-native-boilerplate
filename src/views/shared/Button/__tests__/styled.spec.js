import React from 'react';

import renderStyled from 'utils/testHelpers/renderStyled';
import theme from 'constants/theme';
import * as S from '../styled';

describe('Button styled components', () => {
  describe('S.Wrap matches snapshot', () => {
    const defaultProps = { fillColor: theme.colors.black };

    it('default', () => {
      const wrapper = renderStyled(<S.Wrap {...defaultProps} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('isSmallWidth', () => {
      const wrapper = renderStyled(<S.Wrap {...defaultProps} isSmallWidth />);
      expect(wrapper).toMatchSnapshot();
    });

    it('isSmallHeight', () => {
      const wrapper = renderStyled(<S.Wrap {...defaultProps} isSmallHeight />);
      expect(wrapper).toMatchSnapshot();
    });

    it('outline', () => {
      const wrapper = renderStyled(<S.Wrap {...defaultProps} isOutline />);
      expect(wrapper).toMatchSnapshot();
    });

    it('margin right', () => {
      const wrapper = renderStyled(<S.Wrap {...defaultProps} isMarginRight />);
      expect(wrapper).toMatchSnapshot();
    });

    it('margin bottom', () => {
      const wrapper = renderStyled(<S.Wrap {...defaultProps} isMarginBottom />);
      expect(wrapper).toMatchSnapshot();
    });

    it('filled', () => {
      const wrapper = renderStyled(<S.Wrap {...defaultProps} isMarginRight />);
      expect(wrapper).toMatchSnapshot();
    });

    it('border', () => {
      const wrapper = renderStyled(<S.Wrap {...defaultProps} isBorder />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.Text matches snapshot', () => {
    const defaultProps = { fillColor: theme.colors.black };

    it('default', () => {
      const wrapper = renderStyled(<S.Text {...defaultProps} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('outline', () => {
      const wrapper = renderStyled(<S.Text isOutline {...defaultProps} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
