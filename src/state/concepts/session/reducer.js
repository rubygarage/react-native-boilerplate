import { combineReducers } from 'redux';

import { SET_TOKENS, SET_USER_ID } from './types';

const tokens = (state = null, action) => {
  switch (action.type) {
    case SET_TOKENS:
      return action.tokens;
    default:
      return state;
  }
};

const currentUserId = (state = null, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return action.id;
    default:
      return state;
  }
};

export default combineReducers({
  tokens, currentUserId,
});
