import { renderHook, act } from '@testing-library/react-hooks';
import { call } from 'ramda';

import useInputState from '../useInputState';

jest.mock('ramda', () => ({
  ...jest.requireActual('ramda'),
  call: jest.fn(),
}));

describe('useInputState custom hook', () => {
  const props = {
    field: { name: 'test' },
    form: {
      handleBlur: jest.fn(),
      errors: {},
    },
  };

  it('matches snapshot', () => {
    const { result } = renderHook(() => useInputState(props));

    expect(result.current).toMatchSnapshot();
  });

  it('checks onActionRendered method', () => {
    const { result } = renderHook(() => useInputState(props));

    const event = {
      nativeEvent: {
        layout: {
          width: 444,
        },
      },
    };

    act(() => {
      result.current.onActionRendered(event);
    });

    expect(result.current.actionWidth).toBe(444);
  });

  it('checks onFocus method', () => {
    const { result } = renderHook(() => useInputState(props));

    act(() => {
      result.current.onFocus();
    });

    expect(result.current.isFocused).toBe(true);
  });

  it('checks onBlur method', () => {
    const event = {};

    const { result } = renderHook(() => useInputState(props));

    act(() => {
      result.current.onBlur(event);
    });

    expect(result.current.isFocused).toBe(false);
    expect(call).toHaveBeenCalledWith(props.form.handleBlur('test'), event);
  });

  describe('checks getErrorData method', () => {
    it('should return undefined', () => {
      const { result } = renderHook(() => useInputState(props));

      let errors = null;

      act(() => {
        errors = result.current.getErrorData();
      });

      expect(errors).toEqual({
        errorId: undefined,
        errorValues: undefined,
        errorIcon: 'alert',
      });
    });
  });

  it('should return expected values', () => {
    const { result } = renderHook(() => useInputState({
      ...props,
      form: {
        handleBlur: jest.fn(),
        errors: {
          test: {
            id: 'test_id',
            values: 'test_values',
            icon: 'test_icon',
          },
        },
      },
    }));

    let errors = null;

    act(() => {
      errors = result.current.getErrorData();
    });

    expect(errors).toEqual({
      errorId: 'test_id',
      errorValues: 'test_values',
      errorIcon: 'test_icon',
    });
  });
});
