import renderHookWithProviders from 'utils/testHelpers/renderHookWithProviders';

import useTheme from '../useTheme';

describe('useTheme common hook', () => {
  it('matches snapshot', () => {
    const { result } = renderHookWithProviders(useTheme);

    expect(result.current).toMatchSnapshot();
  });
});
