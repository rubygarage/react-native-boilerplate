import normalize from 'json-api-normalizer';
import { mergeDeepRight } from 'ramda';

import fetchBookingResponse from '../__mocks__/fetchBookingResponse';
import reducer from '../reducer';
import * as types from '../types';

describe('dataReducer', () => {
  const bookingsData = normalize(fetchBookingResponse.data);

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({ meta: {} });
  });

  it('should handle DATA_API_REQUEST', () => {
    const endpoint = '/clients/bookings';
    const action = {
      type: types.DATA_API_REQUEST,
      endpoint,
    };

    expect(reducer(undefined, action)).toEqual({
      meta: {
        '/clients/bookings': {
          loading: true,
          error: false,
        },
      },
    });
  });

  it('should handle DATA_API_SUCCESS', () => {
    const endpoint = '/clients/bookings';
    const action = {
      type: types.DATA_API_SUCCESS,
      endpoint,
      response: bookingsData,
    };

    const priorBookingsState = {
      booking: {
        82: {
          id: '82',
          type: 'booking',
          attributes: {
            'start-time': '2017-03-20T04:42:00.000Z',
            'end-time': '2016-01-30T09:55:00.000Z',
            price: '9.99',
            'client-timezone': 'Jakarta',
          },
        },
      },
    };

    const result = mergeDeepRight(
      priorBookingsState,
      mergeDeepRight(bookingsData, { meta: { [endpoint]: { loading: false } } }),
    );
    expect(reducer(priorBookingsState, action)).toEqual(result);
  });

  it('should handle DATA_API_FAILURE', () => {
    const endpoint = '/clients/bookings';
    const action = {
      type: types.DATA_API_FAILURE,
      endpoint,
    };

    expect(reducer(undefined, action)).toEqual({
      meta: {
        [endpoint]: {
          loading: false,
          error: true,
        },
      },
    });
  });

  it('should handle DATA_DELETE', () => {
    const action = {
      type: types.DATA_DELETE,
      kind: 'booking',
      ids: ['82'],
    };

    const resultState = { ...bookingsData };
    resultState.booking = { 10: bookingsData.booking[10] };

    expect(reducer(bookingsData, action)).toEqual(resultState);
  });
});
