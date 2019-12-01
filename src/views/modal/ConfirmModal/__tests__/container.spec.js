import React from 'react';
import configureStore from 'redux-mock-store';

import shallowWithTheme from 'utils/testHelpers/shallowWithTheme';
import diveTo from 'utils/testHelpers/diveToEnzyme';
import ConfirmModal, { ConfirmModalContainer } from '../container';

describe('ConfirmModal container', () => {
  const dispatch = jest.fn();
  const store = configureStore()({});
  store.dispatch = dispatch;
  const onCloseModal = jest.fn();
  const onDestroyModal = jest.fn();
  const confirmAction = { type: 'Test action' };
  const defaultProps = {
    store,
    isVisible: true,
    onCloseModal,
    onDestroyModal,
    confirmAction,
    title: { id: 'test_title_id' },
    body: [{ id: 'test_body_1' }, { id: 'test_body_1' }],
    confirm: { id: 'test_confirm_id' },
    dismiss: { id: 'test_dismiss_id' },
  };

  const wrapper = shallowWithTheme(<ConfirmModal {...defaultProps} />);
  const container = diveTo(wrapper, ConfirmModalContainer);
  const instance = container.instance();

  beforeEach(() => {
    instance.setState({ isShouldLeaveConference: false });
  });

  it('renders correctly default', () => {
    expect(container).toMatchSnapshot();
  });

  it('changes "isShouldConfirm" state and calls "onCloseModal"', () => {
    expect(instance.state.isShouldConfirm).toBeFalsy();
    instance.handleShouldConfirm();
    expect(instance.state.isShouldConfirm).toBeTruthy();
    expect(onCloseModal).toHaveBeenCalled();
  });

  it('does not call "dispatch" when the "isShouldConfirm" state is false', () => {
    instance.setState({ isShouldConfirm: false });
    instance.onModalHide();
    expect(dispatch).not.toHaveBeenCalled();
    expect(onDestroyModal).toHaveBeenCalled();
  });

  it('does not call "dispatch" when the "isShouldConfirm" state is true', () => {
    instance.setState({ isShouldConfirm: true });
    instance.onModalHide();
    expect(dispatch).toHaveBeenCalledWith(confirmAction);
    expect(onDestroyModal).toHaveBeenCalled();
  });
});
