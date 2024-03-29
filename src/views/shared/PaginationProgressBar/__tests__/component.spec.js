import React from 'react';
import { shallow } from 'enzyme';

import theme from 'utils/testHelpers/mockedTheme';
import PaginationProgressBar from '../component';

describe('PaginationProgressBar component', () => {
  const defaultProps = {
    isLoading: true,
    theme,
  };
  const component = shallow(<PaginationProgressBar {...defaultProps} />);

  it('renders correctly when loading', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correctly when not loading', () => {
    component.setProps({ ...defaultProps, isLoading: false });
    expect(component).toMatchSnapshot();
  });
});
