import React from 'react';
import { shallow } from 'enzyme';
import * as ReactIntl from 'react-intl';

import HooksTestHelper from 'utils/testHelpers/hooksTestHelper';
import { formatMessage } from 'utils/testHelpers/testIntl';
import theme from 'utils/testHelpers/mockedTheme';

import useInputState from '../hooks/useInputState';
import InputField from '../component';

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

jest.mock('../hooks/useInputState', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    isFocused: true,
    actionWidth: 22,
    onActionRendered: jest.fn(),
    onFocus: jest.fn(),
    onBlur: jest.fn(),
    getErrorData: jest.fn(() => ({ })),
  })),
}));

jest.mock('react-intl', () => ({
  ...jest.requireActual('react-intl'),
  useIntl: jest.fn(() => ({ formatMessage: jest.fn() })),
}));

HooksTestHelper.mockUseContextImplementation(() => theme);

describe('InputField component', () => {
  ReactIntl.useIntl.mockImplementation(() => ({
    formatMessage,
  }));

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
    useInputState.mockImplementation(() => ({
      getErrorData: jest.fn(() => ({ errorId: 'test_id' })),
    }));

    const withError = shallow(<InputField {...defaultProps} />);

    expect(withError).toMatchSnapshot();
  });
});
