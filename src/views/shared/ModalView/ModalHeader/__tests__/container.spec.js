import React from 'react';
import { View } from 'react-native';

import shallowWithTheme from 'utils/testHelpers/shallowWithTheme';
import diveTo from 'utils/testHelpers/diveToEnzyme';
import ModalHeader, { ModalHeaderContainer } from '../container';


describe('ModalHeader container', () => {
  const wrapper = shallowWithTheme(<ModalHeader><View /></ModalHeader>);
  const container = diveTo(wrapper, ModalHeaderContainer);

  it('renders correctly default', () => {
    expect(container).toMatchSnapshot();
  });
});
