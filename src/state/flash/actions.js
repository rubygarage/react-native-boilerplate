import { ALERT_TYPES } from 'constants/alert';
import * as types from './types';

export const showFlash = ({
  id,
  lifetime,
  priority,
  isSingleShot = false,
  flashProps,
}) => ({
  type: types.SHOW_FLASH,
  flash: {
    id,
    lifetime,
    priority,
    isSingleShot,
    flashProps,
  },
});

export const showErrorFlash = (action) => ({
  type: types.SHOW_FLASH,
  flash: {
    isSingleShot: false,
    flashProps: {
      title: { id: 'shared.oops' },
      type: ALERT_TYPES.error,
      action,
      actionTextId: 'shared.tryAgain',
      isCloseable: true,
    },
  },
});

export const addFlash = (flash) => ({
  type: types.ADD_FLASH,
  flash,
});

export const hideFlash = (id) => ({
  type: types.HIDE_FLASH,
  id,
});

export const removeFlash = (id, isSingleShot) => ({
  type: types.REMOVE_FLASH,
  id,
  isSingleShot,
});
