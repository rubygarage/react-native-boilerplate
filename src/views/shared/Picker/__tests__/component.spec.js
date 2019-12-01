import React from 'react';
import { shallow } from 'enzyme';

import theme from 'utils/testHelpers/mockedTheme';
import Picker from '../component';

describe('Picker component', () => {
  const defaultProps = {
    onPickerToggle: jest.fn(),
    isOpen: false,
    label: 'value1',
    onValueChange: jest.fn(),
    selectedValue: 'value1',
    options: [
      { key: 'key0', label: 'label0', value: 'value0' },
      { key: 'key1', label: 'label1', value: 'value1' }],
    theme,
  };
  const component = shallow(<Picker {...defaultProps} />);

  it('renders correctly closed', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correctly opened', () => {
    component.setProps({ ...defaultProps, isOpen: true });
    expect(component).toMatchSnapshot();
  });
});
