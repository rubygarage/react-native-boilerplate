import InCallManager from 'react-native-incall-manager';
import { noop } from 'lodash';

import { startInCall, stopInCall, WIRED_HEADSET_KEY } from '../InCallService';

jest.mock('react-native-incall-manager', () => ({
  start: jest.fn(),
  stop: jest.fn(),
  setKeepScreenOn: jest.fn(),
}));

const mockNativeModule = {
  addListener: jest.fn(),
  removeAllListeners: jest.fn(),
};

jest.mock('react-native', () => ({
  NativeModules: {
    InCallManager: jest.fn(),
  },
  NativeEventEmitter: jest.fn(() => mockNativeModule),
}));

describe('InCallService', () => {
  it('startInCall', () => {
    startInCall();
    expect(InCallManager.start).toHaveBeenCalledWith({ media: 'video' });
    expect(InCallManager.setKeepScreenOn).toHaveBeenCalledWith(true);
    expect(mockNativeModule.addListener).toHaveBeenCalledWith(WIRED_HEADSET_KEY, noop);
  });

  it('stopInCall', () => {
    stopInCall();
    expect(InCallManager.stop).toHaveBeenCalled();
    expect(InCallManager.setKeepScreenOn).toHaveBeenCalledWith(false);
    expect(mockNativeModule.removeAllListeners).toHaveBeenCalledWith(WIRED_HEADSET_KEY);
  });
});
