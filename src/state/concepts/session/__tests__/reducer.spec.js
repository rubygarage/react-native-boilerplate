import reducer from '../reducer';
import * as types from '../types';

describe('Session Reducer', () => {
  describe('tokens reducer', () => {
    it('should handle SET_TOKENS', () => {
      const tokens = { access: 'access' };
      const action = {
        type: types.SET_TOKENS,
        tokens,
      };
      const state = reducer(undefined, action);
      expect(state.tokens).toEqual(tokens);
    });
  });

  describe('currentUserId reducer', () => {
    it('should handle SET_USER_ID', () => {
      const id = '300';
      const action = {
        type: types.SET_USER_ID,
        id,
      };
      const state = reducer(undefined, action);
      expect(state.currentUserId).toEqual(id);
    });
  });
});
