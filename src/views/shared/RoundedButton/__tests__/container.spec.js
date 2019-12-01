import React from 'react';

import shallowWithTheme from 'utils/testHelpers/shallowWithTheme';
import diveTo from 'utils/testHelpers/diveToEnzyme';
import RoundedButtonWrapped, { RoundedButtonContainer } from '../container';

const defaultProps = { iconName: 'video-off', isActive: true, onPress: jest.fn() };

describe('RoundedButton container', () => {
  it('renders correctly default', () => {
    const wrapper = shallowWithTheme(<RoundedButtonWrapped {...defaultProps} />);
    const container = diveTo(wrapper, RoundedButtonContainer);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with active icon', () => {
    const props = { ...defaultProps, iconNameActive: 'video' };
    const wrapper = shallowWithTheme(<RoundedButtonWrapped {...props} />);
    const container = diveTo(wrapper, RoundedButtonContainer);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly inactive', () => {
    const props = { ...defaultProps, iconNameActive: 'video', isActive: false };
    const wrapper = shallowWithTheme(<RoundedButtonWrapped {...props} />);
    const container = diveTo(wrapper, RoundedButtonContainer);
    expect(container).toMatchSnapshot();
  });
});
