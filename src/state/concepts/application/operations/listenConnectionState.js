import { createLogic } from 'redux-logic';
import NetInfo from '@react-native-community/netinfo';

import { OFFLINE_FLASH_ID, OFFLINE_FLASH_PRIORITY } from 'constants/app';
import { showFlash, hideFlash } from 'state/flash/actions';
import { ALERT_TYPES } from 'constants/alert';
import { START_LISTEN_CONNECTION_STATE, STOP_LISTEN_CONNECTION_STATE } from '../types';
import { setConnectionState } from '../actions';

const listenConnectionState = createLogic({
  type: START_LISTEN_CONNECTION_STATE,
  cancelType: STOP_LISTEN_CONNECTION_STATE,
  latest: true,
  warnTimeout: 0,

  process({ cancelled$ }, dispatch, done) {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const isConnected = Boolean(state.isInternetReachable);
      dispatch(setConnectionState(isConnected));
      if (isConnected) {
        dispatch(hideFlash(OFFLINE_FLASH_ID));
      } else {
        dispatch(showFlash({
          id: OFFLINE_FLASH_ID,
          priority: OFFLINE_FLASH_PRIORITY,
          flashProps: {
            title: { id: 'flash.lostConnection.title' },
            type: ALERT_TYPES.info,
          },
        }));
      }
    });
    cancelled$.subscribe(() => {
      unsubscribe();
      done();
    });
  },
});

export default listenConnectionState;
