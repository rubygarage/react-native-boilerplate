import * as actions from '../actions';

describe('Session actions', () => {
  it('setTokens()', () => {
    const tokens = {};
    const expectedAction = {
      type: 'session/SET_TOKENS',
      tokens,
    };
    expect(actions.setTokens(tokens)).toEqual(expectedAction);
  });

  it('removeTokens()', () => {
    const expectedAction = {
      type: 'session/SET_TOKENS',
      tokens: null,
    };
    expect(actions.removeTokens()).toEqual(expectedAction);
  });

  it('setUserId()', () => {
    const id = '300';
    const expectedAction = {
      type: 'session/SET_USER_ID',
      id,
    };
    expect(actions.setUserId(id)).toEqual(expectedAction);
  });
});
