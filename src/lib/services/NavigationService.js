import React from 'react';
import { StackActions, CommonActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export const initializeNavigator = (navigator) => {
  navigationRef.current = navigator;
};

export const navigate = (routeName, params) => {
  navigationRef.current?.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    })
  );
};

export const back = () => {
  navigationRef.current?.dispatch(CommonActions.goBack());
};

export const replace = (routeName, params) => {
  navigationRef.current?.dispatch(
    StackActions.replace({ routeName, params }),
  );
};

export const reset = (index, routes) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({ index, routes }),
  );
};
