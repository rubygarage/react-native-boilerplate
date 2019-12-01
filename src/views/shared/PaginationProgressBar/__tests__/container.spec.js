import React from 'react';

import shallowWithTheme from 'utils/testHelpers/shallowWithTheme';
import PaginationProgressBar from '../container';

describe('PaginationProgressBar container', () => {
  const wrapper = shallowWithTheme(<PaginationProgressBar />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
