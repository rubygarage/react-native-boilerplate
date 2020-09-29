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

  let result = null;

  beforeEach(() => {
    jest.clearAllMocks();
    ({ result } = renderHookWithProviders(() => useContainer(props)));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('checks handleShouldConfirm method', () => {
    act(() => {
      result.current.handleShouldConfirm();
    });

    expect(result.current.isShouldConfirm).toBe(true);
    expect(props.onCloseModal).toHaveBeenCalled();
  });

  describe('checks onModalHide method', () => {
    it('should dispatch and destroy modal', () => {
      act(() => { result.current.setShouldConfirm(true); });

      act(() => { result.current.onModalHide(); });

      expect(mockDispatch).toHaveBeenCalledWith({});
      expect(props.onDestroyModal).toHaveBeenCalled();
    });

    it('should only destroy modal', () => {
      act(() => { result.current.setShouldConfirm(false); });

      act(() => { result.current.onModalHide(); });

      expect(mockDispatch).not.toHaveBeenCalledWith({});
      expect(props.onDestroyModal).toHaveBeenCalled();
    });
  });
});
