import React from 'react';
import { Text } from 'react-native';

import shallowWithTheme from 'utils/testHelpers/shallowWithTheme';
import diveTo from 'utils/testHelpers/diveToEnzyme';
import Button from '../container';
import ButtonComponent from '../component';

const defaultProps = { onPress: jest.fn() };

describe('Button container', () => {
  it('renders correctly default', () => {
    const wrapper = shallowWithTheme(<Button {...defaultProps}><Text>Test Child</Text></Button>);
    const container = diveTo(wrapper, ButtonComponent);
    expect(container).toMatchSnapshot();
  });
});
