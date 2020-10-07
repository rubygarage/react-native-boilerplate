import { useEffect } from 'react';
import { AppState } from 'react-native';

import { useDispatch } from 'react-redux';

import {
  startListenConnectionState,
  stopListenConnectionState,
} from 'state/concepts/application/actions';

const useContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startListenConnectionState());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'active') {
        dispatch(startListenConnectionState());
      } else {
        dispatch(stopListenConnectionState());
      }
    };

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useContainer;
