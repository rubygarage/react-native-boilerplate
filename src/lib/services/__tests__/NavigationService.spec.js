import { NavigationActions, StackActions } from 'react-navigation';

import {
  setTopLevelNavigator, back, navigate, replace, reset,
} from '../NavigationService';

const navigator = {
  dispatch: jest.fn(),
};

const routeName = 'testRoute';
const params = { param: 'test' };

describe('NavigationService', () => {
  beforeEach(() => {
    setTopLevelNavigator(navigator);
    jest.clearAllMocks();
  });

  it('back', () => {
    back();
    expect(navigator.dispatch).toHaveBeenCalledWith(NavigationActions.back());
  });

  it('navigate', () => {
    navigate(routeName, params);
    expect(navigator.dispatch).toHaveBeenCalledWith(
      NavigationActions.navigate({ routeName, params }),
    );
  });

  it('replace', () => {
    replace(routeName, params);
    expect(navigator.dispatch).toHaveBeenCalledWith(
      StackActions.replace({ routeName, params }),
    );
  });

  it('reset', () => {
    const index = 0;
    const actions = [NavigationActions.navigate({ routeName, params })];
    const key = 'test key';
    reset(index, actions, key);
    expect(navigator.dispatch).toHaveBeenCalledWith(StackActions.reset({ index, actions, key }));
  });
});
