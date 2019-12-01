import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { DateTime } from 'luxon';

import { hideFlash } from 'state/flash/actions';
import diveTo from 'utils/testHelpers/diveToEnzyme';
import Flash, { FlashContainer } from '../container';

jest.useFakeTimers();

jest.mock('state/flash/actions', () => ({
  hideFlash: jest.fn(),
}));

describe('Flash container', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();
  const id = '300';
  const doAnimation = jest.fn();
  const action = { type: 'SOME_ACTION' };
  const flashProps = { action };
  const defaultProps = { id, doAnimation, flashProps, store };
  const options = { disableLifecycleMethods: true };
  const wrapper = shallow(<Flash {...defaultProps} />, options);
  const container = diveTo(wrapper, FlashContainer);
  const instance = container.instance();

  jest.spyOn(DateTime, 'local');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });

  it('renders correctly closeable', () => {
    container.setProps({ ...defaultProps, flashProps: { ...flashProps, isCloseable: true } });
    expect(container).toMatchSnapshot();
  });

  it('componentDidMount updates timer and sets interval', () => {
    const onHideFlashSpy = jest.spyOn(instance, 'onHideFlash');

    const lifetime = 30 * 1000;
    container.setProps({ ...defaultProps, lifetime });
    instance.componentDidMount();

    expect(setInterval).toHaveBeenCalledWith(
      onHideFlashSpy, lifetime,
    );
  });

  it('componentDidMount does nothing without lifetime', () => {
    container.setProps({ ...defaultProps, lifetime: undefined });
    instance.componentDidMount();

    expect(setInterval).not.toHaveBeenCalled();
  });

  it('componentWillUnmount clears timerHandle interval', () => {
    instance.timerHandle = 'timerHandle mock';
    instance.componentWillUnmount();

    expect(clearInterval).toHaveBeenCalledWith('timerHandle mock');
  });

  it('onHideFlash hides flash', () => {
    instance.onHideFlash();

    expect(hideFlash).toHaveBeenCalledWith(id);
  });

  it('onActionClick dispatches action and hides modal', () => {
    instance.onActionClick();

    expect(hideFlash).toHaveBeenCalledWith(id);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
