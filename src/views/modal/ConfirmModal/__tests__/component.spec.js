import React from 'react';
import { shallow } from 'enzyme';

import theme from 'utils/testHelpers/mockedTheme';
import HooksTestHelper from 'utils/testHelpers/hooksTestHelper';

import ConfirmModal from '../component';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

HooksTestHelper.mockUseContextImplementation(() => theme);

describe('ConfirmModal component', () => {
  const defaultProps = {
    isVisible: true,
    onCloseModal: jest.fn(),
    onShouldConfirm: jest.fn(),
    onModalHide: jest.fn(),
    onDestroyModal: jest.fn(),
    confirmAction: {},
    title: { id: 'test_title_id' },
    body: [{ id: 'test_body_1' }, { id: 'test_body_1' }],
    confirm: { id: 'test_confirm_id' },
    dismiss: { id: 'test_dismiss_id' },
  };

  const component = shallow(<ConfirmModal {...defaultProps} />);

  it('renders correctly default', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correctly with default dismiss button', () => {
    component.setProps({ ...defaultProps, dismiss: undefined });
    expect(component).toMatchSnapshot();
  });
});
