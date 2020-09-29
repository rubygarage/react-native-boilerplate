import { renderHook, act } from '@testing-library/react-hooks';
import { AppState } from 'react-native';
import * as reactRedux from 'react-redux';

import {
  startListenConnectionState,
  stopListenConnectionState,
} from 'state/concepts/application/actions';

import useContainer from '../hook';

const dispatch = jest.fn();

jest.spyOn(AppState, 'addEventListener');
jest.spyOn(AppState, 'removeEventListener');

describe('useContainer', () => {
  reactRedux.useDispatch = () => dispatch;

  it('matches snapshot', () => {
    const { result } = renderHook(() => useContainer());

    expect(result.current).toMatchSnapshot();
  });

  describe('Lifecycle', () => {
    it('checks mounting', () => {
      const { result } = renderHook(() => useContainer());

      act(() => {
        result.current.didMount();
      });

      expect(dispatch).toHaveBeenCalledWith(startListenConnectionState());
      expect(AppState.addEventListener).toHaveBeenCalledWith('change', result.current.handleAppStateChange);
    });

    it('checks unmounting', () => {
      const { result } = renderHook(() => useContainer());

      let unMountCallback = null;

      act(() => {
        unMountCallback = result.current.didMount();
      });

      unMountCallback();

      expect(AppState.removeEventListener).toHaveBeenCalledWith('change', result.current.handleAppStateChange);
    });
  });

  describe('checks handleAppStateChange method', () => {
    it('should start listen connection state', () => {
      const { result } = renderHook(() => useContainer());

      act(() => {
        result.current.handleAppStateChange('active');
      });

      expect(dispatch).toHaveBeenCalledWith(startListenConnectionState());
    });

    it('should not start listen connection state', () => {
      const { result } = renderHook(() => useContainer());

      act(() => {
        result.current.handleAppStateChange('background');
      });

      expect(dispatch).toHaveBeenCalledWith(stopListenConnectionState());
    });
  });
});
