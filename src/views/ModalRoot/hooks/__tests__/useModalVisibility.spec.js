import { renderHook, act } from '@testing-library/react-hooks';

import { hideModal } from 'state/modal/actions';

import useModalVisibility from '../useModalVisibility';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('useInputState custom hook', () => {
  it('matches snapshot', () => {
    const { result } = renderHook(() => useModalVisibility());

    expect(result.current).toMatchSnapshot();
  });

  it('checks onActionRendered method', () => {
    const { result } = renderHook(() => useModalVisibility());

    act(() => {
      result.current.onCloseModal();
    });

    expect(result.current.isVisible).toBe(false);
  });

  it('checks onDestroyModal method', () => {
    const { result } = renderHook(() => useModalVisibility());

    act(() => {
      result.current.onDestroyModal();
    });

    expect(result.current.isVisible).toBe(true);
    expect(mockDispatch).toHaveBeenCalledWith(hideModal());
  });
});
