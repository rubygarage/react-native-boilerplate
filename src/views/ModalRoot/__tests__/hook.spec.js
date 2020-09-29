import { act } from '@testing-library/react-hooks';

import renderHookWithProviders from 'utils/testHelpers/renderHookWithProviders';
import { hideModal } from 'state/modal/actions';

import useContainer from '../hook';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('ModalRoot useContainer hook', () => {
  it('matches snapshot', () => {
    const { result } = renderHookWithProviders(() => useContainer());

    expect(result.current).toMatchSnapshot();
  });

  it('checks onActionRendered method', () => {
    const { result } = renderHookWithProviders(() => useContainer());

    act(() => {
      result.current.onCloseModal();
    });

    expect(result.current.isVisible).toBe(false);
  });

  it('checks onDestroyModal method', () => {
    const { result } = renderHookWithProviders(() => useContainer());

    act(() => {
      result.current.onDestroyModal();
    });

    expect(result.current.isVisible).toBe(true);
    expect(mockDispatch).toHaveBeenCalledWith(hideModal());
  });
});
