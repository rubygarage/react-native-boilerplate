import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { create, act } from 'react-test-renderer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import withSafeArea from '../withSafeArea';

const TestView = ({ insets }) => (
  <View style={{
    top: insets.top,
    left: insets.left,
    bottom: insets.bottom,
    right: insets.right,
  }}
  />
);

TestView.propTypes = {
  insets: PropTypes.shape().isRequired,
};

describe('withSafeArea', () => {
  const TestComponent = withSafeArea(TestView);
  const WrapperComponent = () => <SafeAreaProvider><TestComponent /></SafeAreaProvider>;

  it('renders correctly', () => {
    const component = create(<WrapperComponent />);
    expect(component).toMatchSnapshot();
    const { onInsetsChange } = component.root.findByType('RNCSafeAreaProvider').props;
    act(() => {
      onInsetsChange({
        nativeEvent: { insets: { top: 1, left: 2, right: 3, bottom: 4 } },
      });
    });
    expect(component).toMatchSnapshot();
  });
});
