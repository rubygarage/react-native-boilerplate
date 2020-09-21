/* eslint-env detox/detox, jest */

describe('App launch', () => {
  const homeScreen = element(by.id('HomeScreen'));

  it('should checks HomeScreen', async () => {
    await expect(homeScreen).toExist();
  });
});
