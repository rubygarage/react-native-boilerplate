import React from 'react';
import { shallow } from 'enzyme';

import mockedTheme from 'utils/testHelpers/mockedTheme';
import mockedIntl from 'utils/testHelpers/testIntl';

import InputField from '../component';
import * as useContainer from '../hook';

const defaultProps = {
  labelId: 'label_id',
  placeholderId: 'placeholder_id',
  onActionRendered: jest.fn(),
  borderColor: 'white',
  borderWidth: 2,
  form: {
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    errors: {},
  },
  field: { name: 'testName', value: 'value' },
};

jest.mock('../hook', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    isFocused: true,
    actionWidth: 22,
    onActionRendered: jest.fn(),
    onFocus: jest.fn(),
    onBlur: jest.fn(),
    getErrorData: jest.fn(() => ({ })),
    intl: mockedIntl,
    theme: mockedTheme,
  })),
}));

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

  it('renders correctly with action', () => {
    const props = {
      ...defaultProps,
      onActionClick: jest.fn(),
      actionId: 'action_id',
    };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly with error', () => {
    useContainer.default.mockImplementation(() => ({
      getErrorData: jest.fn(() => ({ errorId: 'test_id' })),
      intl: mockedIntl,
      theme: mockedTheme,
    }));

    const withError = shallow(<InputField {...defaultProps} />);

    expect(withError).toMatchSnapshot();
  });
});
