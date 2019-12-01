import { combineReducers } from 'redux';

import { SET_ONBOARDING_COMPLETION, SET_CONNECTION_STATE } from './types';

const onboarding = (state = null, action) => {
  switch (action.type) {
    case SET_ONBOARDING_COMPLETION:
      return action.isCompleted;
    default:
      return state;
  }
};

const connection = (state = true, action) => {
  switch (action.type) {
    case SET_CONNECTION_STATE:
      return action.isConnected;
    default:
      return state;
  }
};

export default combineReducers({
  onboarding, connection,
});
