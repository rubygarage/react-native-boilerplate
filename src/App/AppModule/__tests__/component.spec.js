import React from 'react';
import { shallow } from 'enzyme';

import theme from 'constants/theme';
import AppModule from '../component';

describe('AppModule component', () => {
  const defaultProps = {
    theme,
    handleNavRef: jest.fn(),
  };
  const component = shallow(<AppModule {...defaultProps} />);
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
