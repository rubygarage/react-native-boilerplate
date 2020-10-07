import renderHookWithProviders from 'utils/testHelpers/renderHookWithProviders';

import useContainer from '../hook';

describe('Alert useContainer hook', () => {
  const { result } = renderHookWithProviders(useContainer);

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });
});
