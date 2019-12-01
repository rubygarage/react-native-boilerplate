import React from 'react';
import { shallow } from 'enzyme';

import theme from 'utils/testHelpers/mockedTheme';
import ConfirmModal from '../component';

describe('ConfirmModal component', () => {
  const defaultProps = {
    isVisible: true,
    onCloseModal: jest.fn(),
    onShouldConfirm: jest.fn(),
    onModalHide: jest.fn(),
    title: { id: 'test_title_id' },
    body: [{ id: 'test_body_1' }, { id: 'test_body_1' }],
    confirm: { id: 'test_confirm_id' },
    dismiss: { id: 'test_dismiss_id' },
    theme,
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
