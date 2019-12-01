import * as selectors from '../selectors';

describe('localeSelector', () => {
  it('returns locale', () => {
    const locale = 'en';
    const state = {
      intl: {
        locale,
      },
    };
    expect(selectors.localeSelector(state)).toEqual(locale);
  });
});
