import React from 'react';

import renderStyled from 'utils/testHelpers/renderStyled';
import * as S from '../styled';

describe('RoundedButton styled components', () => {
  describe('S.Wrap matches snapshot', () => {
    it('active', () => {
      const wrapper = renderStyled(<S.Wrap isActive />);
      expect(wrapper).toMatchSnapshot();
    });

    it('inactive', () => {
      const wrapper = renderStyled(<S.Wrap isActive={false} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
