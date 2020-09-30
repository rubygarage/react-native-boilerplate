import { renderHook, act } from '@testing-library/react-hooks';
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
  let result = null;
  let unmount = null;

  beforeEach(() => {
    ({ result, unmount } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('Lifecycle', () => {
    it('checks mounting', () => {
      expect(dispatch).toHaveBeenCalledWith(startListenConnectionState());
      expect(AppState.addEventListener).toHaveBeenCalledWith('change', result.current.handleAppStateChange);
    });

    it('checks unmounting', () => {
      unmount();

      expect(AppState.removeEventListener).toHaveBeenCalledWith('change', result.current.handleAppStateChange);
    });
  });

  describe('checks handleAppStateChange method', () => {
    it('should start listen connection state', () => {
      act(() => {
        result.current.handleAppStateChange('active');
      });

      expect(dispatch).toHaveBeenCalledWith(startListenConnectionState());
    });

    it('should not start listen connection state', () => {
      act(() => {
        result.current.handleAppStateChange('background');
      });

      expect(dispatch).toHaveBeenCalledWith(stopListenConnectionState());
    });
  });
});
