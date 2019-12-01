import theme from '../mockedTheme';

describe('mockedTheme()', () => {
  it('should return key instead of value', () => {
    expect(theme.colors.red300).toEqual('[mocked red300]');
  });

  it('should return 0 instead of value', () => {
    expect(theme.sizes.headerHeight).toEqual(0);
  });
});
