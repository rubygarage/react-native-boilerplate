import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import ModalView from '../component';

const defaultProps = {
  isVisible: true,
  onClose: jest.fn(),
};

describe('ModalView component', () => {
  const component = shallow(<ModalView {...defaultProps}><View /></ModalView>);
  it('renders correctly visible', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correctly invisible', () => {
    const props = { ...defaultProps, isVisible: false };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly when is not cancelable', () => {
    const props = { ...defaultProps, onClose: undefined };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });
});
