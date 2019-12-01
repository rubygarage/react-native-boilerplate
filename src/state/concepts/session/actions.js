import * as types from './types';

export const setTokens = (tokens) => ({
  type: types.SET_TOKENS,
  tokens,
});

export const removeTokens = () => ({
  type: types.SET_TOKENS,
  tokens: null,
});

export const setUserId = (id) => ({
  type: types.SET_USER_ID,
  id,
});
