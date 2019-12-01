import reducer from '../reducer';
import * as types from '../types';

describe('System reducer', () => {
  describe('onboarding reducer', () => {
    it('should handle SET_ONBOARDING_COMPLETION', () => {
      const action = {
        type: types.SET_ONBOARDING_COMPLETION,
        isCompleted: true,
      };
      const state = reducer(undefined, action);
      expect(state.onboarding).toBeTruthy();
    });
  });

  describe('connection reducer', () => {
    it('should handle SET_CONNECTION_STATE', () => {
      const action = {
        type: types.SET_CONNECTION_STATE,
        isConnected: true,
      };
      const state = reducer(undefined, action);
      expect(state.connection).toBeTruthy();
    });
  });
});
