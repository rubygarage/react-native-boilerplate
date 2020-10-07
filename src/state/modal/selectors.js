import * as R from 'ramda';

export const modalTypeSelector = R.pathOr(null, ['modal', 'modalType']);
export const modalPropsSelector = R.pathOr({}, ['modal', 'modalProps']);
