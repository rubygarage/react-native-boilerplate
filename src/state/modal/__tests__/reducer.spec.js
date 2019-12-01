import reducer from '../reducer';
import * as types from '../types';

describe('modalReducer', () => {
  let modalState;

  it('should handle SHOW_MODAL', () => {
    const modal = { key: 'CREATE_STORE' };
    const modalProps = { customProp: 'customProp' };
    const action = {
      type: types.SHOW_MODAL,
      modal,
      modalProps,
    };
    modalState = {
      ...modalState,
      modalType: modal.key,
      modalProps,
    };

    expect(reducer(undefined, action)).toEqual(modalState);
  });

  it('should handle HIDE_MODAL', () => {
    modalState = {
      ...modalState,
      modalType: null,
      modalProps: {},
    };
    const action = { type: types.HIDE_MODAL };
    expect(reducer(undefined, action)).toEqual(modalState);
  });

  it('should return default state', () => {
    modalState = {
      ...modalState,
      modalType: null,
      modalProps: {},
    };
    const action = { type: 'CUSTOM_ACTION' };
    expect(reducer(undefined, action)).toEqual(modalState);
  });
});
