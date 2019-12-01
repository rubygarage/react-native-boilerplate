import React from 'react';

import shallowWithTheme from 'utils/testHelpers/shallowWithTheme';
import diveTo from 'utils/testHelpers/diveToEnzyme';
import Picker, { PickerContainer } from '../container';

describe('Picker container', () => {
  const onValueChange = jest.fn();
  const defaultProps = {
    selectedValue: 'value1',
    options: [
      { key: 'key0', label: 'label0', value: 'value0' },
      { key: 'key1', label: 'label1', value: 'value1' }],
    onValueChange,
  };

  const wrapper = shallowWithTheme(<Picker {...defaultProps} />);
  const container = diveTo(wrapper, PickerContainer);
  const instance = container.instance();

  jest.spyOn(instance, 'handlePickerToggle');

  it('renders correctly default', () => {
    expect(container).toMatchSnapshot();
  });

  it('returns correct label', () => {
    expect(instance.label).toEqual(defaultProps.options[1].label);
  });

  it('returns correct default label', () => {
    container.setProps({ ...defaultProps, selectedValue: undefined });
    expect(instance.label).toEqual('{Translation id: shared.na}');
  });

  it('handlePickerToggle changes state', () => {
    expect(instance.state.isOpen).toBeFalsy();
    instance.handlePickerToggle();
    expect(instance.state.isOpen).toBeTruthy();
  });

  it('handleValueChange changes value and calls handlePickerToggle', () => {
    const value = 'test value';
    instance.handleValueChange(value);
    expect(instance.handlePickerToggle).toHaveBeenCalled();
    expect(onValueChange).toHaveBeenCalledWith(value);
  });
});
