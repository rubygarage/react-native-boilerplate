import { mergeWith } from 'lodash';
import { flatten, is, ifElse, always } from 'ramda';

const updateDataHelper = (stateData, type, ids, data) => {
  const objects = {};
  flatten([ids]).forEach((id) => {
    objects[id] = mergeWith(
      {},
      stateData[type][id],
      { ...data },
      (objValue, srcValue) => ifElse(is(Array), always(srcValue), always(undefined))(objValue),
    );
  });

  return { [type]: objects };
};

export default updateDataHelper;
