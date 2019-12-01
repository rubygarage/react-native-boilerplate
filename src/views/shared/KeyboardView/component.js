import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { PLATFORM_TYPE } from 'constants/app';

const KeyboardView = ({ children }) => (
  <KeyboardAvoidingView
    behavior="padding"
    enabled={Platform.OS === PLATFORM_TYPE.ios}
  >
    <TouchableWithoutFeedback
      testID="touchableView"
      onPress={Keyboard.dismiss}
    >
      {children}
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

KeyboardView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default KeyboardView;
