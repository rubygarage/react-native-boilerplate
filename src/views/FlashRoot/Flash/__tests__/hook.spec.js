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

  let { result, unmount } = renderHookWithProviders(() => useContainer(props));

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('checks onHideFlash method', () => {
    act(() => {
      result.current.onHideFlash();
    });

    expect(mockedDispatch).toHaveBeenCalledWith(hideFlash(props.id));
    expect(props.doAnimation).toHaveBeenCalled();
  });

  it('checks onActionClick method', () => {
    mockedDispatch.mockClear();

    act(() => {
      result.current.onActionClick();
    });

    expect(mockedDispatch).toHaveBeenCalledTimes(2);
    expect(mockedDispatch).toHaveBeenNthCalledWith(1, hideFlash(props.id));
    expect(mockedDispatch).toHaveBeenNthCalledWith(2, { type: 'TEST' });
  });

  describe('Lifecycle', () => {
    it('mounting - should not call setInterval', () => {
      expect(setInterval).not.toHaveBeenCalledWith();
    });

    it('mounting - should call setInterval', () => {
      result = renderHookWithProviders(() => useContainer({ ...props, lifetime: 1000 })).result;

      expect(setInterval).toHaveBeenCalledWith(result.current.onHideFlash, 1000);

      expect(clearInterval).toHaveBeenCalled();
    });

    it('checks cleanup callbacks', () => {
      ({ result, unmount } = renderHookWithProviders(
        () => useContainer({ ...props, lifetime: 1000 }),
      ));

      unmount();

      expect(clearInterval).toHaveBeenCalled();
    });
  });
});
