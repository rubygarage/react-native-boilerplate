import { renderHook } from '@testing-library/react-hooks';
import { AppState } from 'react-native';

import {
  startListenConnectionState,
  stopListenConnectionState,
} from 'state/concepts/application/actions';
import { dispatch } from 'mocks/react-redux';

import useContainer from '../hook';

jest.spyOn(AppState, 'addEventListener');
jest.spyOn(AppState, 'removeEventListener');

describe('useContainer', () => {
  let result;
  let unmount;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    ({ result, unmount } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('lifecycle', () => {
    describe('mount', () => {
      it('starts listening connection state', () => {
        expect(dispatch).toHaveBeenCalledWith(startListenConnectionState());
      });

      it('subscribes to app state changes', () => {
        expect(AppState.addEventListener).toHaveBeenCalledWith(
          'change',
          expect.any(Function),
        );
      });
    });

    describe('unmount', () => {
      beforeEach(() => {
        unmount();
      });

      it('unsubscribes from app state changes', () => {
        expect(AppState.removeEventListener).toHaveBeenCalledWith(
          'change',
          expect.any(Function),
        );
      });
    });
  });

  describe('checks handleAppStateChange method', () => {
    it('should start listen connection state', () => {
      const callback = AppState.addEventListener.mock.calls[0][1];
      callback('active');

      expect(dispatch).toHaveBeenCalledWith(startListenConnectionState());
    });

    it('should not start listen connection state', () => {
      const callback = AppState.addEventListener.mock.calls[0][1];
      callback('background');

      expect(dispatch).toHaveBeenCalledWith(stopListenConnectionState());
    });
  });
});
