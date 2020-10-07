import React from 'react';
import { shallow } from 'enzyme';

import mockedTheme from 'utils/testHelpers/mockedTheme';
import mockedIntl from 'utils/testHelpers/testIntl';

import Picker from '../component';

jest.mock('../hook', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    isOpen: false,
    setIsOpen: jest.fn(),
    detectLabel: jest.fn(),
    handlePickerToggle: jest.fn(),
    handleValueChange: jest.fn(),
    intl: mockedIntl,
    theme: mockedTheme,
  })),
}));

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
