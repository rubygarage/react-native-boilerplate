import InCallManager from 'react-native-incall-manager';
import { NativeModules, NativeEventEmitter } from 'react-native';
import { noop } from 'lodash';

export const WIRED_HEADSET_KEY = 'WiredHeadset';

export const startInCall = () => {
  InCallManager.start({ media: 'video' });
  InCallManager.setKeepScreenOn(true);

  const nativeBridge = NativeModules.InCallManager;
  const NativeModule = new NativeEventEmitter(nativeBridge);

  NativeModule.addListener(WIRED_HEADSET_KEY, noop);
};

export const stopInCall = () => {
  InCallManager.stop();
  InCallManager.setKeepScreenOn(false);

  const nativeBridge = NativeModules.InCallManager;
  const NativeModule = new NativeEventEmitter(nativeBridge);

  NativeModule.removeAllListeners(WIRED_HEADSET_KEY);
};
