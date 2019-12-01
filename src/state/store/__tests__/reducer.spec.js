import { DateTime } from 'luxon';

import reducer from '../reducer';
import * as types from '../types';

jest.spyOn(DateTime, 'local').mockReturnValue(DateTime.fromISO('2020-04-13T09:08:34.123'));

describe('rootReducer', () => {
  it('should handle RESET_STORE', () => {
    const state = {
      modal: {
        modalType: 'DEACTIVATE_MODAL',
        modalProps: {},
      },
      searchResults: {
        users: [1],
      },
    };
    const action = { type: types.RESET_STORE };
    const initialState = reducer(undefined, {});

    expect(reducer(state, action)).toEqual(initialState);
  });
});
