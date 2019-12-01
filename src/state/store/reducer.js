import { combineReducers } from 'redux';

import * as conceptsReducers from '../concepts';
import dataReducer from '../data/reducer';
import flashReducer from '../flash/reducer';
import intlReducer from '../intl/reducer';
import modalReducer from '../modal/reducer';
import { RESET_STORE } from './types';

const appReducer = combineReducers({
  ...conceptsReducers,
  data: dataReducer,
  flash: flashReducer,
  intl: intlReducer,
  modal: modalReducer,
});

export default (state, action) => {
  if (action.type === RESET_STORE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
