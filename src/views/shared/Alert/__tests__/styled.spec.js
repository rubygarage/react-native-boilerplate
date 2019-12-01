import React from 'react';

import renderStyled from 'utils/testHelpers/renderStyled';
import * as S from '../styled';

const color = 'white';

describe('Wrapper styled components', () => {
  describe('S.Wrapper matches snapshot', () => {
    const defaultProps = { color };

    it('default', () => {
      const wrapper = renderStyled(<S.Wrapper {...defaultProps} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('closeable', () => {
      const props = { ...defaultProps, onCloseClick: jest.fn() };
      const wrapper = renderStyled(<S.Wrapper {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.IconWrap matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.IconWrap />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.ContentArea matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.ContentArea />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.MessageTitle matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.MessageTitle color={color} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.MessageText matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.MessageText color={color} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.ActionButton matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.ActionButton color={color} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.ActionButtonText matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.ActionButtonText />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.ActionIcon matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.ActionIcon />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('S.CloseButton matches snapshot', () => {
    it('default', () => {
      const wrapper = renderStyled(<S.CloseButton />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
