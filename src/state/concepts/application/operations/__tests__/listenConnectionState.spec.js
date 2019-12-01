import NetInfo from '@react-native-community/netinfo';

import { showFlash, hideFlash } from 'state/flash/actions';
import { OFFLINE_FLASH_ID, OFFLINE_FLASH_PRIORITY } from 'constants/app';
import { ALERT_TYPES } from 'constants/alert';
import listenConnectionState from '../listenConnectionState';
import { setConnectionState } from '../../actions';

const mockUnsubscribe = jest.fn();

jest.mock('@react-native-community/netinfo', () => ({
  addEventListener: jest.fn(),
}));

const mockListener = (isInternetReachable) => {
  NetInfo.addEventListener.mockImplementationOnce((action) => {
    action({ isInternetReachable });
    return mockUnsubscribe;
  });
};

describe('listenConnectionState', () => {
  const dispatch = jest.fn();
  const done = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('has valid attributes', () => {
    expect(listenConnectionState).toMatchSnapshot();
  });

  it('calls dispatch setConnectionState', () => {
    const cancelled$ = {
      subscribe: jest.fn(),
    };

    const isInternetReachable = true;
    mockListener(isInternetReachable);
    listenConnectionState.process({ cancelled$ }, dispatch, done);
    expect(dispatch).toHaveBeenCalledWith(setConnectionState(isInternetReachable));
    expect(dispatch).toHaveBeenCalledWith(hideFlash(OFFLINE_FLASH_ID));
    expect(cancelled$.subscribe).toHaveBeenCalled();
  });

  it('calls dispatch setConnectionState', () => {
    const cancelled$ = {
      subscribe: jest.fn(),
    };

    const isInternetReachable = false;
    mockListener(isInternetReachable);
    listenConnectionState.process({ cancelled$ }, dispatch, done);
    expect(dispatch).toHaveBeenCalledWith(setConnectionState(isInternetReachable));
    expect(dispatch).toHaveBeenCalledWith(showFlash({
      id: OFFLINE_FLASH_ID,
      priority: OFFLINE_FLASH_PRIORITY,
      flashProps: {
        title: { id: 'flash.lostConnection.title' },
        type: ALERT_TYPES.info,
      },
    }));
    expect(cancelled$.subscribe).toHaveBeenCalled();
  });

  it('calls unsubscribe and done', () => {
    const cancelled$ = {
      subscribe: (action) => {
        action();
      },
    };

    mockListener(true);
    listenConnectionState.process({ cancelled$ }, dispatch, done);
    expect(mockUnsubscribe).toHaveBeenCalled();
    expect(done).toHaveBeenCalled();
  });
});
