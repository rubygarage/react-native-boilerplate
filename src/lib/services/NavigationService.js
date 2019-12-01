import { NavigationActions, StackActions } from 'react-navigation';

let navigator;

export const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};

export const back = () => {
  navigator.dispatch(
    NavigationActions.back(),
  );
};

export const replace = (routeName, params) => {
  navigator.dispatch(
    StackActions.replace({ routeName, params }),
  );
};

export const reset = (index, actions, key) => {
  const resetAction = StackActions.reset({ index, actions, key });
  navigator.dispatch(resetAction);
};
