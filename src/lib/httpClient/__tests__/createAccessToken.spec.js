import createAccessToken from '../createAccessToken';

describe('createAccessToken()', () => {
  it('sets token', () => {
    const accessToken = 'existing token';
    expect(createAccessToken(accessToken)).toEqual(`Bearer ${accessToken}`);
  });
});
