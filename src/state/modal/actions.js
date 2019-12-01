import * as types from './types';

export const showModal = ({ modal, modalProps }) => ({
  type: types.SHOW_MODAL,
  modal,
  modalProps,
});

export const hideModal = () => ({
  type: types.HIDE_MODAL,
});
