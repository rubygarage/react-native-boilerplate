import { ALERT_TYPES } from 'constants/alert';
import reducer from '../reducer';
import * as types from '../types';

jest.spyOn(Date, 'now').mockReturnValue(1);
jest.spyOn(global.Math, 'random').mockReturnValue(0);

describe('Flash Reducer', () => {
  describe('list reducer', () => {
    it('should handle ADD_FLASH with auto-generated values', () => {
      const flash = { type: ALERT_TYPES.info };
      const action = {
        type: types.ADD_FLASH,
        flash,
      };
      const state = reducer(undefined, action);
      expect(state.list).toEqual({
        '1_0': {
          id: '1_0',
          priority: 1,
          type: 'info',
        },
      });
    });

    it('should handle ADD_FLASH with values', () => {
      const flash = { id: 300, priority: 200, type: ALERT_TYPES.info };
      const action = {
        type: types.ADD_FLASH,
        flash,
      };
      const state = reducer(undefined, action);
      expect(state.list).toEqual({
        300: {
          id: 300,
          priority: 200,
          type: 'info',
        },
      });
    });

    it('should handle REMOVE_FLASH with values', () => {
      const id = 300;
      const action = {
        type: types.REMOVE_FLASH,
        id,
      };
      const state = reducer({
        list: {
          300: { type: 'info' },
          301: { type: 'info' },
        },
      }, action);
      expect(state.list).toEqual({ 301: { type: 'info' } });
    });
  });

  describe('viewedIds reducer', () => {
    it('should handle REMOVE_FLASH when is single shot', () => {
      const id = 300;
      const action = {
        type: types.REMOVE_FLASH,
        id,
        isSingleShot: true,
      };
      const state = reducer(undefined, action);
      expect(state.viewedIds).toEqual([id]);
    });

    it('should handle REMOVE_FLASH when is not single shot', () => {
      const id = 300;
      const action = {
        type: types.REMOVE_FLASH,
        id,
      };
      const state = reducer(undefined, action);
      expect(state.viewedIds).toEqual([]);
    });
  });
});
