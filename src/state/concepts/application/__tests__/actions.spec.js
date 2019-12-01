import * as actions from '../actions';

describe('Application actions', () => {
  it('setOnboardingCompletion()', () => {
    const expectedAction = {
      type: 'application/SET_ONBOARDING_COMPLETION',
      isCompleted: true,
    };

    expect(actions.setOnboardingCompletion(true)).toEqual(expectedAction);
  });

  it('startListenConnectionState()', () => {
    const expectedAction = {
      type: 'application/START_LISTEN_CONNECTION_STATE',
    };

    expect(actions.startListenConnectionState()).toEqual(expectedAction);
  });

  it('stopListenConnectionState()', () => {
    const expectedAction = {
      type: 'application/STOP_LISTEN_CONNECTION_STATE',
    };

    expect(actions.stopListenConnectionState()).toEqual(expectedAction);
  });

  it('setConnectionState()', () => {
    const expectedAction = {
      type: 'application/SET_CONNECTION_STATE',
      isConnected: true,
    };

    expect(actions.setConnectionState(true)).toEqual(expectedAction);
  });
});
