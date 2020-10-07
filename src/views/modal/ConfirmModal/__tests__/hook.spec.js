import { act } from '@testing-library/react-hooks';

import renderHookWithProviders from 'utils/testHelpers/renderHookWithProviders';
import { dispatch } from 'mocks/react-redux';

import useContainer from '../hook';

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

    expect(props.onCloseModal).toHaveBeenCalled();
  });

  describe('checks onModalHide method', () => {
    it('should only destroy modal', () => {
      act(() => { result.current.onModalHide(); });

      expect(dispatch).not.toHaveBeenCalledWith({});
      expect(props.onDestroyModal).toHaveBeenCalled();
    });

    it('should dispatch and destroy modal', () => {
      act(() => { result.current.handleShouldConfirm(); });
      act(() => { result.current.onModalHide(); });

      expect(dispatch).toHaveBeenCalledWith({});
      expect(props.onDestroyModal).toHaveBeenCalled();
    });
  });
});
