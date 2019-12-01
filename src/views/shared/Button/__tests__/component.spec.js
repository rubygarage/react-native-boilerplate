import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import theme from 'utils/testHelpers/mockedTheme';
import Button from '../component';

const onPress = jest.fn();
const defaultProps = {
  onPress, isLoading: false, isSmall: undefined, isOutline: undefined, theme,
};

describe('Button component', () => {
  const component = shallow(<Button {...defaultProps}><Text>Test Child</Text></Button>);

  it('renders correctly default', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correctly with enabled styles', () => {
    const props = {
      ...defaultProps,
      isSmall: true,
      isOutline: true,
      isMargin: true,
    };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly with loading state', () => {
    const props = {
      ...defaultProps,
      isLoading: true,
    };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly with enabled styles and fillColor', () => {
    const props = {
      ...defaultProps,
      isSmall: true,
      isOutline: true,
      isMargin: true,
      fillColor: theme.colors.green500,
    };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });
});
