import * as actions from '../actions';

it('resetStore', () => {
  const expectedAction = { type: 'RESET_STORE' };

  expect(actions.resetStore()).toEqual(expectedAction);
});
