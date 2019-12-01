import React from 'react';

import shallowWithTheme from 'utils/testHelpers/shallowWithTheme';
import diveTo from 'utils/testHelpers/diveToEnzyme';
import InputField, { InputFieldContainer } from '../container';

const errorId = 'error_id';
const iconId = 'icon_id';
const blurFunction = jest.fn();
const handleBlur = jest.fn(() => blurFunction);

const defaultProps = {
  field: { name: 'testName' },
  form: {
    errors: { testName: { id: errorId, icon: iconId } },
    handleChange: jest.fn(),
    handleBlur,
  },
  values: { testName: 'value' },
  labelId: 'label_id',
  placeholderId: 'placeholder_id',
};

describe('InputField container', () => {
  const wrapper = shallowWithTheme(<InputField {...defaultProps} />);
  const container = diveTo(wrapper, InputFieldContainer);
  const instance = container.instance();

  it('renders correctly default', () => {
    expect(container).toMatchSnapshot();
  });

  it('onActionRendered changes state', () => {
    instance.setState({ actionWidth: 0 });
    expect(instance.state.actionWidth).toEqual(0);

    const width = 300;
    const event = { nativeEvent: { layout: { width } } };
    instance.onActionRendered(event);
    expect(instance.state.actionWidth).toEqual(width);
  });

  it('onFocus changes state', () => {
    instance.setState({ isFocused: false });
    expect(instance.state.isFocused).toBeFalsy();

    instance.onFocus();
    expect(instance.state.isFocused).toBeTruthy();
  });

  it('onBlur changes state', () => {
    instance.setState({ isFocused: true });
    expect(instance.state.isFocused).toBeTruthy();

    const event = {};
    instance.onBlur(event);
    expect(blurFunction).toHaveBeenCalledWith(event);
    expect(instance.state.isFocused).toBeFalsy();
  });

  it('getErrorData returns valid error id and error icon', () => {
    expect(instance.getErrorData()).toEqual({ errorId, errorIcon: iconId });
  });
});
