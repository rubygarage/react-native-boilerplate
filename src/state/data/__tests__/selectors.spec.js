import {
  loadingSelector,
  hasMoreSelector,
  errorSelector,
} from '../selectors';

describe('Data selectors', () => {
  describe('loadingSelector()', () => {
    const state = {
      data: {
        meta: {
          endpoint: { loading: true },
          endpoint1: { loading: false },
        },
      },
    };

    it('returns endpoint loading state', () => {
      expect(loadingSelector(state, 'endpoint')).toEqual(true);
      expect(loadingSelector(state, 'endpoint1')).toEqual(false);
      expect(loadingSelector(state, 'endpoint2')).toBeUndefined();
    });
  });

  describe('hasMoreSelector()', () => {
    const state = {
      data: {
        meta: {
          endpoint: { meta: { hasMore: true } },
        },
      },
    };

    it('returns endpoint loading state', () => {
      expect(hasMoreSelector(state, 'endpoint')).toEqual(true);
      expect(hasMoreSelector(state, 'endpoint2')).toBeUndefined();
    });
  });

  describe('errorSelector()', () => {
    const state = {
      data: {
        meta: {
          endpoint: { error: true },
          endpoint1: { error: false },
        },
      },
    };

    it('returns endpoint error state', () => {
      expect(errorSelector(state, 'endpoint')).toEqual(true);
      expect(errorSelector(state, 'endpoint1')).toEqual(false);
      expect(errorSelector(state, 'endpoint2')).toBeUndefined();
    });
  });
});
