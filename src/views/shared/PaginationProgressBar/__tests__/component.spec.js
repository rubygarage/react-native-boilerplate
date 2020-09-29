import React from 'react';
import { shallow } from 'enzyme';

import mockedTheme from 'utils/testHelpers/mockedTheme';

import PaginationProgressBar from '../component';

jest.mock('../hook', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    theme: mockedTheme,
  })),
}));

describe('PaginationProgressBar component', () => {
  const defaultProps = {
    isLoading: true,
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
