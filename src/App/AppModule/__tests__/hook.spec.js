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

  const { result } = renderHook(() => useContainer());

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('Lifecycle', () => {
    it('checks mounting', () => {
      act(() => {
        result.current.didMount();
      });

      expect(dispatch).toHaveBeenCalledWith(startListenConnectionState());
      expect(AppState.addEventListener).toHaveBeenCalledWith('change', result.current.handleAppStateChange);
    });

    it('checks unmounting', () => {
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
