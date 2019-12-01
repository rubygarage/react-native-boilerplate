import { createLogic } from 'redux-logic';

import { HIDE_FLASH } from '../types';
import { flashSelector } from '../selectors';
import { removeFlash } from '../actions';

const hideFlash = createLogic({
  type: HIDE_FLASH,
  latest: true,

  process({ action: { id }, getState }, dispatch, done) {
    const flash = flashSelector(getState(), id);

    if (flash) {
      dispatch(removeFlash(id, flash.isSingleShot));
    }
    done();
  },
});

export default hideFlash;
