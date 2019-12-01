import React from 'react';

import renderStyled from 'utils/testHelpers/renderStyled';
import * as S from '../styled';

describe('PaginationProgressBar styled components', () => {
  describe('S.Wrap matches snapshot', () => {
    it('default', () => {
      const container = renderStyled(<S.Wrap />);
      expect(container).toMatchSnapshot();
    });
  });
});
