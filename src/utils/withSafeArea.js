import React from 'react';
import { SafeAreaConsumer } from 'react-native-safe-area-context';

const withSafeArea = (WrappedComponent) => (props) => (
  <SafeAreaConsumer>
    {(insets) => (<WrappedComponent insets={insets} {...props} />)}
  </SafeAreaConsumer>
);

export default withSafeArea;
