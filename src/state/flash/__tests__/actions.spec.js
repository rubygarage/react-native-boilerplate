import { ALERT_TYPES } from 'constants/alert';
import * as actions from '../actions';

describe('Flash actions', () => {
  it('showFlash()', () => {
    const id = '300';
    const type = ALERT_TYPES.info;
    const title = 'title';
    const subtitle = 'subtitle';
    const message = 'message';
    const isCloseable = true;
    const action = { type: 'NESTED_ACTION' };
    const actionIconName = 'video';
    const actionTextId = 'action_text_id';
    const lifetime = 1000;
    const priority = 0;
    const flashProps = {
      type,
      title,
      subtitle,
      message,
      isCloseable,
      action,
      actionIconName,
      actionTextId,
    };
    const expectedAction = {
      type: 'SHOW_FLASH',
      flash: {
        id,
        lifetime,
        priority,
        isSingleShot: false,
        flashProps,
      },
    };
    expect(actions.showFlash({
      id,
      lifetime,
      priority,
      flashProps,
    })).toEqual(expectedAction);
  });

  it('showErrorFlash()', () => {
    const action = { type: 'TEST_ACTION_TYPE' };
    const expectedAction = {
      type: 'SHOW_FLASH',
      flash: {
        isSingleShot: false,
        flashProps: {
          title: { id: 'shared.oops' },
          type: ALERT_TYPES.error,
          action,
          actionTextId: 'shared.tryAgain',
          isCloseable: true,
        },
      },
    };
    expect(actions.showErrorFlash(action)).toEqual(expectedAction);
  });

  it('addFlash()', () => {
    const flash = { id: '300' };
    const expectedAction = {
      type: 'ADD_FLASH',
      flash,
    };
    expect(actions.addFlash(flash)).toEqual(expectedAction);
  });

  it('hideFlash()', () => {
    const id = 300;
    const expectedAction = {
      type: 'HIDE_FLASH',
      id,
    };
    expect(actions.hideFlash(id)).toEqual(expectedAction);
  });
});
