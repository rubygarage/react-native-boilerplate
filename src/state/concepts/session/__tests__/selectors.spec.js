import normalize from 'json-api-normalizer';

import fetchBookingResponse from '../__mocks__/fetchBookingResponse';
import * as selectors from '../selectors';

describe('Session selectors', () => {
  describe('tokensSelector', () => {
    it('returns tokens', () => {
      const tokens = {
        access: 'access token',
        refresh: 'refresh token',
      };
      const state = {
        session: {
          tokens,
        },
      };
      expect(selectors.tokensSelector(state)).toEqual(tokens);
    });
  });

  describe('currentUserIdSelector', () => {
    it('returns id', () => {
      const currentUserId = '300';
      const state = {
        session: {
          currentUserId,
        },
      };
      expect(selectors.currentUserIdSelector(state)).toEqual(currentUserId);
    });
  });

  describe('currentUserIdSelector', () => {
    it('returns id', () => {
      const state = {
        data: normalize(fetchBookingResponse.data),
        session: {
          currentUserId: 300,
        },
      };
      expect(selectors.currentUserSelector(state)).toEqual({ avatarUrls: {}, firstName: 'First', id: '300', lastName: 'Lst' });
    });

    it('returns null', () => {
      const state = {
        data: {},
        session: {
          currentUserId: 301,
        },
      };
      expect(selectors.currentUserSelector(state)).toBeNull();
    });
  });
});
