import { useEffect } from 'react';
import { AppState } from 'react-native';

import { useDispatch } from 'react-redux';

import {
  startListenConnectionState,
  stopListenConnectionState,
} from 'state/concepts/application/actions';

const useContainer = () => {
  const dispatch = useDispatch();

  /**
   * Handle App state.
   */
  const handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'active') {
      dispatch(startListenConnectionState());
    } else {
      dispatch(stopListenConnectionState());
    }
  };

  /**
   * Did mount.
   */
  const didMount = () => {
    dispatch(startListenConnectionState());
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  };

  // Did mount
  useEffect(didMount, []);

  return {
    handleAppStateChange,
    didMount,
  };
};

export default useContainer;
