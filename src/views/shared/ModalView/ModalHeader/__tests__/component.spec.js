import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import ModalHeader from '../component';

const defaultProps = {
  theme: {
    colors: {
    },
  },
};
const component = shallow(<ModalHeader {...defaultProps}><View /></ModalHeader>);

describe('ModalHeader component', () => {
  it('renders correctly default', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correctly default', () => {
    const props = {
      ...defaultProps,
      isClosable: true,
      onClose: jest.fn(),
    };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });
});
