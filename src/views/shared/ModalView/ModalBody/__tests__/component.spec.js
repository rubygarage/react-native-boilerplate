import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import ModalBody from '../component';

const component = shallow(<ModalBody><View /></ModalBody>);

describe('ModalBody component', () => {
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
