import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import mockedTheme from 'utils/testHelpers/mockedTheme';

import ModalHeader from '../component';

jest.mock('../hook', () => ({
  __esModule: true,
  default: jest.fn(() => mockedTheme),
}));

const component = shallow(<ModalHeader><View /></ModalHeader>);

describe('ModalHeader component', () => {
  it('renders correctly default', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correctly default', () => {
    const props = {
      isClosable: true,
      onClose: jest.fn(),
    };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });
});
