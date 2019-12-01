import { createSelector } from 'reselect';
import build from 'redux-object';
import { path, isNil, complement, prop } from 'ramda';

const dataSelector = prop('data');

export const tokensSelector = path(['session', 'tokens']);

export const isAuthorizedSelector = createSelector(tokensSelector, complement(isNil));

export const currentUserIdSelector = path(['session', 'currentUserId']);

export const currentUserSelector = createSelector(
  currentUserIdSelector,
  dataSelector,
  (id, data) => (data.clientProfile && data.clientProfile[id] ? build(data, 'clientProfile', id) : null),
);
