import React from 'react';
import { shallow } from 'enzyme';
import { View, Platform, Keyboard } from 'react-native';

import { PLATFORM_TYPE } from 'constants/app';
import KeyboardView from '../component';

jest.spyOn(Keyboard, 'dismiss');

describe('KeyboardView component', () => {
  it('renders correctly with iOS platform', () => {
    Platform.OS = PLATFORM_TYPE.ios;
    const component = shallow(
      <KeyboardView>
        <View />
      </KeyboardView>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders correctly with Android platform', () => {
    Platform.OS = PLATFORM_TYPE.android;
    const component = shallow(
      <KeyboardView>
        <View />
      </KeyboardView>,
    );
    expect(component).toMatchSnapshot();
  });

  it('dismisses keyboard', () => {
    const component = shallow(
      <KeyboardView>
        <View />
      </KeyboardView>,
    );
    component.findWhere((node) => node.prop('testID') === 'touchableView').simulate('press');
    expect(Keyboard.dismiss).toHaveBeenCalled();
  });
});
