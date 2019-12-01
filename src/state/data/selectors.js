import { createSelector } from 'reselect';
import { path } from 'ramda';

const metaSelector = (state) => state.data.meta;

export const loadingSelector = createSelector(
  metaSelector,
  (_, endpoint) => endpoint,
  (meta, endpoint) => path([endpoint, 'loading'], meta),
);

export const hasMoreSelector = createSelector(
  metaSelector,
  (_, endpoint) => endpoint,
  (meta, endpoint) => path([endpoint, 'meta', 'hasMore'], meta),
);

export const errorSelector = createSelector(
  metaSelector,
  (_, endpoint) => endpoint,
  (meta, endpoint) => path([endpoint, 'error'], meta),
);
