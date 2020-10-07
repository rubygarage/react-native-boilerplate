import React from 'react';
import { shallow } from 'enzyme';

import mockedTheme from 'utils/testHelpers/mockedTheme';

import ConfirmModal from '../component';

jest.mock('../hook', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    handleShouldConfirm: jest.fn(),
    onModalHide: jest.fn(),
    setShouldConfirm: jest.fn(),
    isShouldConfirm: true,
    theme: mockedTheme,
  })),
}));

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
