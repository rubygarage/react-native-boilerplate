import { check, request } from 'react-native-permissions';
import {
  mergeAll, prop, pipe, values, includes, nth,
} from 'ramda';

const GRANTED = 'granted';
const BLOCKED = 'blocked';
const UNAVAILABLE = 'unavailable';

const requestAll = async (permissions) => {
  const result = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const permission of permissions) {
    // eslint-disable-next-line no-await-in-loop
    const res = await request(permission);
    result[permission] = res;
  }
  return result;
};

export const checkPermissions = (permissions, onResult) => {
  Promise.all(permissions.map((permission) => check(permission)))
    .then((result) => {
      const statuses = permissions.map((permission, index) => ({
        [permission]: nth(index, result),
      }));
      onResult(mergeAll(statuses));
    });
};

export const requestPermissions = (permissions, onResult) => {
  Promise.resolve(requestAll(permissions)).then(onResult);
};

export const isGranted = (
  permissionType, permissionResult,
) => prop(permissionType, permissionResult) === GRANTED;

export const isUnsupported = (
  permissionType, permissionResult,
) => prop(permissionType, permissionResult) === UNAVAILABLE;

export const isIncludesBlocked = pipe(values, includes(BLOCKED));
