import { act } from '@testing-library/react-hooks';

import renderHookWithProviders from 'utils/testHelpers/renderHookWithProviders';

import useContainer from '../hook';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('ConfirmModal useContainer hook', () => {
  const props = {
    onCloseModal: jest.fn(),
    onDestroyModal: jest.fn(),
    confirmAction: {},
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    const { result } = renderHookWithProviders(() => useContainer(props));

    expect(result.current).toMatchSnapshot();
  });

  it('checks handleShouldConfirm method', () => {
    const { result } = renderHookWithProviders(() => useContainer(props));

    act(() => {
      result.current.handleShouldConfirm();
    });

    expect(result.current.isShouldConfirm).toBe(true);
    expect(props.onCloseModal).toHaveBeenCalled();
  });

  describe('checks onModalHide method', () => {
    it('should dispatch and destroy modal', () => {
      const { result } = renderHookWithProviders(() => useContainer(props));

      act(() => { result.current.setShouldConfirm(true); });

      act(() => { result.current.onModalHide(); });

      expect(mockDispatch).toHaveBeenCalledWith({});
      expect(props.onDestroyModal).toHaveBeenCalled();
    });

    it('should only destroy modal', () => {
      const { result } = renderHookWithProviders(() => useContainer(props));

      act(() => { result.current.setShouldConfirm(false); });

      act(() => { result.current.onModalHide(); });

      expect(mockDispatch).not.toHaveBeenCalledWith({});
      expect(props.onDestroyModal).toHaveBeenCalled();
    });
  });
});
