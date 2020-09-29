import renderHookWithProviders from 'utils/testHelpers/renderHookWithProviders';

import useContainer from '../hook';

describe('Button useContainer hook', () => {
  it('matches snapshot', () => {
    const { result } = renderHookWithProviders(useContainer);

    expect(result.current).toMatchSnapshot();
  });
});
