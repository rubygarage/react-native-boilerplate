import { createLogic } from 'redux-logic';
import { contains } from 'ramda';

import { SHOW_FLASH } from '../types';
import { viewedIdsSelector } from '../selectors';
import { addFlash } from '../actions';

const showFlash = createLogic({
  type: SHOW_FLASH,
  latest: true,

  process({ action: { flash }, getState }, dispatch, done) {
    const viewedIds = viewedIdsSelector(getState());
    const { id } = flash;

    if (!contains(id, viewedIds)) {
      dispatch(addFlash(flash));
    }
    done();
  },
});

export default showFlash;
