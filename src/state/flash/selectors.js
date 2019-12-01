import { createSelector } from 'reselect';
import {
  prop, path, sort, ascend, pipe, values,
} from 'ramda';

const listSelector = path(['flash', 'list']);

export const flashSelector = createSelector(
  listSelector,
  (_, id) => id, (flashes, id) => prop(id, flashes),
);

const flashValuesSelector = pipe(listSelector, values);

export const flashesSelector = createSelector(
  flashValuesSelector,
  sort(ascend(prop('priority'))),
);

export const viewedIdsSelector = path(['flash', 'viewedIds']);
