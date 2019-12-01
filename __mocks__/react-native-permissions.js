const { PERMISSIONS, RESULTS } = require('../node_modules/react-native-permissions/lib/commonjs/constants');

export { PERMISSIONS, RESULTS };

export const openSettings = jest.fn(async () => { });
export const check = jest.fn(async () => RESULTS.GRANTED);
export const request = jest.fn(async () => RESULTS.GRANTED);

export default {
  PERMISSIONS,
  RESULTS,
  openSettings,
  check,
  request,
};
