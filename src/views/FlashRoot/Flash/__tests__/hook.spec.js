import { act } from '@testing-library/react-hooks';

import { hideFlash } from 'state/flash/actions';
import renderHookWithProviders from 'utils/testHelpers/renderHookWithProviders';

import useContainer from '../hook';

jest.useFakeTimers();

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedDispatch,
}));

describe('doAnimationHook', () => {
  const props = {
    id: 'some',
    flashProps: { action: { type: 'TEST' } },
    doAnimation: jest.fn(),
    lifetime: null,
  };

  it('matches snapshot', () => {
    const { result } = renderHookWithProviders(() => useContainer(props));

    expect(result.current).toMatchSnapshot();
  });

  it('checks onHideFlash method', () => {
    const { result } = renderHookWithProviders(() => useContainer(props));

    act(() => {
      result.current.onHideFlash();
    });

    expect(mockedDispatch).toHaveBeenCalledWith(hideFlash(props.id));
    expect(props.doAnimation).toHaveBeenCalled();
  });

  it('checks onActionClick method', () => {
    mockedDispatch.mockClear();

    const { result } = renderHookWithProviders(() => useContainer(props));

    act(() => {
      result.current.onActionClick();
    });

    expect(mockedDispatch).toHaveBeenCalledTimes(2);
    expect(mockedDispatch).toHaveBeenNthCalledWith(1, hideFlash(props.id));
    expect(mockedDispatch).toHaveBeenNthCalledWith(2, { type: 'TEST' });
  });

  describe('checks didMount method', () => {
    it('should call setInterval', () => {
      const { result } = renderHookWithProviders(() => useContainer({ ...props, lifetime: 1000 }));

      let unMountingCallback = null;

      act(() => {
        unMountingCallback = result.current.didMount();
      });

      expect(setInterval).toHaveBeenCalledWith(result.current.onHideFlash, 1000);

      unMountingCallback();

      expect(clearInterval).toHaveBeenCalled();
    });

    it('should not call setInterval', () => {
      const { result } = renderHookWithProviders(() => useContainer(props));

      act(() => {
        result.current.didMount();
      });

      expect(setInterval).not.toHaveBeenCalledWith();
    });
  });
});
