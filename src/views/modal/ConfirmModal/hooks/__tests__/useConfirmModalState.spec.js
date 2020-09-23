import { renderHook, act } from '@testing-library/react-hooks';

import useConfirmModalState from '../useConfirmModalState';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('useInputState custom hook', () => {
  const props = {
    onCloseModal: jest.fn(),
    onDestroyModal: jest.fn(),
    confirmAction: {},
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    const { result } = renderHook(() => useConfirmModalState(props));

    expect(result.current).toMatchSnapshot();
  });

  it('checks handleShouldConfirm method', () => {
    const { result } = renderHook(() => useConfirmModalState(props));

    act(() => {
      result.current.handleShouldConfirm();
    });

    expect(result.current.isShouldConfirm).toBe(true);
    expect(props.onCloseModal).toHaveBeenCalled();
  });

  describe('checks onModalHide method', () => {
    it('should dispatch and destroy modal', () => {
      const { result } = renderHook(() => useConfirmModalState(props));

      act(() => { result.current.setShouldConfirm(true); });

      act(() => { result.current.onModalHide(); });

      expect(mockDispatch).toHaveBeenCalledWith({});
      expect(props.onDestroyModal).toHaveBeenCalled();
    });

    it('should only destroy modal', () => {
      const { result } = renderHook(() => useConfirmModalState(props));

      act(() => { result.current.setShouldConfirm(false); });

      act(() => { result.current.onModalHide(); });

      expect(mockDispatch).not.toHaveBeenCalledWith({});
      expect(props.onDestroyModal).toHaveBeenCalled();
    });
  });
});
