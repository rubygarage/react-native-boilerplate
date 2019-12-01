import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { hideModal } from 'state/modal/actions';
import diveTo from 'utils/testHelpers/diveToEnzyme';
import ModalRootWrapped, { ModalRootContainer } from '../container';

jest.mock('state/modal/actions', () => ({
  hideModal: jest.fn(),
}));

describe('ModalRoot container', () => {
  const defaultStore = configureStore()({
    modal: {
      modalType: 'MY_MODAL',
      modalProps: {
        customProp: 'customProp',
      },
    },
  });
  defaultStore.dispatch = jest.fn();

  const defaultWrapper = shallow(<ModalRootWrapped store={defaultStore} history={{}} />);
  const defaultContainer = diveTo(defaultWrapper, ModalRootContainer);
  const instance = defaultContainer.instance();

  it('renders ModalRoot component', () => {
    expect(defaultContainer).toMatchSnapshot();
  });

  it('onCloseModal changes state', () => {
    instance.setState({ isVisible: true });
    instance.onCloseModal();
    expect(instance.state.isVisible).toBeFalsy();
  });

  it('onDestroyModal hides modal and resets state', () => {
    instance.setState({ isVisible: false });
    instance.onDestroyModal();
    expect(hideModal).toHaveBeenCalled();
    expect(instance.state.isVisible).toBeTruthy();
  });
});
