import renderHookWithProviders from 'utils/testHelpers/renderHookWithProviders';

import useContainer from '../hook';

describe('ModalHeader useContainer hook', () => {
  it('matches snapshot', () => {
    const { result } = renderHookWithProviders(useContainer);

    expect(result.current).toMatchSnapshot();
  });
});
