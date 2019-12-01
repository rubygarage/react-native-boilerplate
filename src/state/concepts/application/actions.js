import * as types from './types';

export const setOnboardingCompletion = (isCompleted) => ({
  type: types.SET_ONBOARDING_COMPLETION,
  isCompleted,
});

export const startListenConnectionState = () => ({
  type: types.START_LISTEN_CONNECTION_STATE,
});

export const stopListenConnectionState = () => ({
  type: types.STOP_LISTEN_CONNECTION_STATE,
});

export const setConnectionState = (isConnected) => ({
  type: types.SET_CONNECTION_STATE,
  isConnected,
});
