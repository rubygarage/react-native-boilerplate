import { renderHook, act } from '@testing-library/react-hooks';

import HooksTestHelper from 'utils/testHelpers/hooksTestHelper';
import { hideFlash } from 'state/flash/actions';

import useFlashMethods from '../useFlashMethods';

jest.useFakeTimers();

describe('doAnimationHook', () => {
  const dispatch = jest.fn();

  HooksTestHelper.mockUseDispatchImplementation(() => dispatch);

  const props = {
    id: 'some',
    flashProps: { action: { type: 'TEST' } },
    doAnimation: jest.fn(),
    lifetime: null,
  };

  it('matches snapshot', () => {
    const { result } = renderHook(() => useFlashMethods(props));

    expect(result.current).toMatchSnapshot();
  });

  it('checks onHideFlash method', () => {
    const { result } = renderHook(() => useFlashMethods(props));

    act(() => {
      result.current.onHideFlash();
    });

    expect(dispatch).toHaveBeenCalledWith(hideFlash(props.id));
    expect(props.doAnimation).toHaveBeenCalled();
  });

  it('checks onActionClick method', () => {
    dispatch.mockClear();

    const { result } = renderHook(() => useFlashMethods(props));

    act(() => {
      result.current.onActionClick();
    });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, hideFlash(props.id));
    expect(dispatch).toHaveBeenNthCalledWith(2, { type: 'TEST' });
  });

  describe('checks didMount method', () => {
    it('should call setInterval', () => {
      const { result } = renderHook(() => useFlashMethods({ ...props, lifetime: 1000 }));

      let unMountingCallback = null;

      act(() => {
        unMountingCallback = result.current.didMount();
      });

      expect(setInterval).toHaveBeenCalledWith(result.current.onHideFlash, 1000);

      unMountingCallback();

      expect(clearInterval).toHaveBeenCalled();
    });

    it('should not call setInterval', () => {
      const { result } = renderHook(() => useFlashMethods(props));

      act(() => {
        result.current.didMount();
      });

      expect(setInterval).not.toHaveBeenCalledWith();
    });
  });
});
