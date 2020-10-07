import React from 'react';
import { shallow } from 'enzyme';

import mockedTheme from 'utils/testHelpers/mockedTheme';

import RoundedButton from '../component';

const defaultProps = { iconName: 'video-off', isActive: true, onPress: jest.fn() };

jest.mock('../hook', () => ({
  __esModule: true,
  default: jest.fn(() => mockedTheme),
}));

describe('RoundedButton container', () => {
  const component = shallow(<RoundedButton {...defaultProps} />);

  it('renders correctly default', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correctly with active icon', () => {
    const props = { ...defaultProps, iconNameActive: 'video' };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly inactive', () => {
    const props = { ...defaultProps, iconNameActive: 'video', isActive: false };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });
});
