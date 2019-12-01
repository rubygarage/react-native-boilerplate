import { omit, append } from 'ramda';
import { combineReducers } from 'redux';

import * as types from './types';

const list = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_FLASH: {
      const { flash } = action;
      const id = flash.id || `${Date.now()}_${Math.floor(Math.random() * 9999)}`;
      const priority = flash.priority || Date.now();
      return {
        ...state,
        [id]: { ...flash, id, priority },
      };
    }
    case types.REMOVE_FLASH:
      return omit([action.id], state);
    default:
      return state;
  }
};

const viewedIds = (state = [], action) => {
  switch (action.type) {
    case types.REMOVE_FLASH:
      return action.isSingleShot ? append(action.id, state) : state;
    default:
      return state;
  }
};

export default combineReducers({
  list, viewedIds,
});
