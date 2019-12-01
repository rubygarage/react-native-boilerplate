import React from 'react';
import { shallow } from 'enzyme';

import theme from 'utils/testHelpers/mockedTheme';
import testIntl from 'utils/testHelpers/testIntl';
import InputField from '../component';

const defaultProps = {
  labelId: 'label_id',
  placeholderId: 'placeholder_id',
  theme,
  onActionRendered: jest.fn(),
  onFocus: jest.fn(),
  onBlur: jest.fn(),
  borderColor: 'white',
  borderWidth: 2,
  actionWidth: 0,
  form: { handleChange: jest.fn() },
  field: { name: 'testName', value: 'value' },
  isFocused: false,
  intl: testIntl,
};

describe('InputField component', () => {
  const component = shallow(<InputField {...defaultProps} />);

  it('renders correctly default', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders without label', () => {
    const props = {
      ...defaultProps,
      labelId: undefined,
    };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly with error', () => {
    const props = {
      ...defaultProps,
      errorId: 'error_id',
      errorIcon: 'close',
    };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly with action', () => {
    const props = {
      ...defaultProps,
      onActionClick: jest.fn(),
      actionId: 'action_id',
    };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });
});
