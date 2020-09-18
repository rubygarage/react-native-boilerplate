import { CommonActions, StackActions } from '@react-navigation/native';

import * as NavigationService from '../NavigationService';

const routeName = 'testRoute';
const params = { param: 'test' };

describe('NavigationService', () => {
  NavigationService.initializeNavigator({
    navigate: jest.fn(),
    dispatch: jest.fn(),
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('back', () => {
    NavigationService.back();
    expect(
      NavigationService.navigationRef.current.dispatch,
    ).toHaveBeenCalledWith(CommonActions.goBack());
  });

  it('navigate', () => {
    NavigationService.navigate(routeName, params);
    expect(
      NavigationService.navigationRef.current.dispatch,
    ).toHaveBeenCalledWith(
      CommonActions.navigate({
        name: routeName,
        params,
      }),
    );
  });

  it('replace', () => {
    NavigationService.replace(routeName, params);
    expect(
      NavigationService.navigationRef.current.dispatch,
    ).toHaveBeenCalledWith(
      StackActions.replace({ routeName, params }),
    );
  });

  it('reset', () => {
    const index = 0;
    const routes = [];
    NavigationService.reset(index, routes);
    expect(
      NavigationService.navigationRef.current.dispatch,
    ).toHaveBeenCalledWith(CommonActions.reset({ index, routes }));
  });
});
