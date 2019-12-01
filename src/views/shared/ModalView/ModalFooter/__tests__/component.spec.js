import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import ModalFooter from '../component';

const component = shallow(<ModalFooter><View /></ModalFooter>);

describe('ModalFooter component', () => {
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
