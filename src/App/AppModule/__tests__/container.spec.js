import React from 'react';
import { AppState } from 'react-native';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import diveTo from 'utils/testHelpers/diveToEnzyme';
import { startListenConnectionState, stopListenConnectionState } from 'state/concepts/application/actions';
import AppModule, { AppModuleContainer } from '../container';

jest.spyOn(AppState, 'addEventListener');
jest.spyOn(AppState, 'removeEventListener');

jest.mock('lib/services/NavigationService', () => ({
  setTopLevelNavigator: jest.fn(),
}));

jest.mock('state/concepts/application/actions', () => ({
  startListenConnectionState: jest.fn(),
  stopListenConnectionState: jest.fn(),
}));

const store = configureStore()({});
store.dispatch = jest.fn();
const defaultProps = { store };

describe('App module', () => {
  const wrapper = shallow(<AppModule {...defaultProps} />);
  const container = diveTo(wrapper, AppModuleContainer);
  const instance = container.instance();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });

  it('componentDidMount listen deep links', () => {
    instance.componentDidMount();
    expect(startListenConnectionState).toHaveBeenCalled();
    expect(AppState.addEventListener).toHaveBeenCalledWith('change', instance.handleAppStateChange);
  });

  it('componentWillUnmount removes subscription', () => {
    instance.componentWillUnmount();
    expect(AppState.removeEventListener).toHaveBeenCalledWith('change', instance.handleAppStateChange);
  });

  it('calls startListenConnectionState', async () => {
    const appState = 'active';
    await instance.handleAppStateChange(appState);
    expect(startListenConnectionState).toHaveBeenCalled();
  });

  it('calls stopListenConnectionState', () => {
    const appState = 'background';
    instance.handleAppStateChange(appState);
    expect(stopListenConnectionState).toHaveBeenCalled();
  });
});
