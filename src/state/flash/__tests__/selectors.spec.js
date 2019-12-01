import { ALERT_TYPES } from 'constants/alert';
import { flashesSelector, viewedIdsSelector, flashSelector } from '../selectors';

describe('flashesSelector', () => {
  it('should returns sorted flashes list', () => {
    const list = {
      1: { id: 1, priority: 2, type: ALERT_TYPES.info },
      2: { id: 2, priority: 1, type: ALERT_TYPES.info },
    };
    expect(flashesSelector({ flash: { list } })).toEqual([
      { id: 2, priority: 1, type: ALERT_TYPES.info },
      { id: 1, priority: 2, type: ALERT_TYPES.info }]);
  });
});

describe('flashSelector', () => {
  it('should returns viewed ids', () => {
    const viewedIds = [300, 301];
    expect(viewedIdsSelector({ flash: { viewedIds } })).toEqual(viewedIds);
  });
});

describe('flashSelector', () => {
  it('should returns sorted flashes list', () => {
    const list = {
      1: { id: 1, priority: 2, type: ALERT_TYPES.info },
      2: { id: 2, priority: 1, type: ALERT_TYPES.info },
    };
    const state = { flash: { list } };
    expect(flashSelector(state, 2)).toEqual({ id: 2, priority: 1, type: ALERT_TYPES.info });
  });
});
