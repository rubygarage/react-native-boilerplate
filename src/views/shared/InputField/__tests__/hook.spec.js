import { act } from '@testing-library/react-hooks';
import { call } from 'ramda';

import renderHookWithProviders from 'utils/testHelpers/renderHookWithProviders';

import useContainer from '../hook';

jest.mock('ramda', () => ({
  ...jest.requireActual('ramda'),
  call: jest.fn(),
}));

describe('InputField useContainer hook', () => {
  const props = {
    field: { name: 'test' },
    form: {
      handleBlur: jest.fn(),
      errors: {},
    },
  };

  let result = null;

  beforeEach(() => {
    ({ result } = renderHookWithProviders(() => useContainer(props)));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('checks onActionRendered method', () => {
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
    act(() => {
      result.current.onFocus();
    });

    expect(result.current.isFocused).toBe(true);
  });

  it('checks onBlur method', () => {
    const event = {};

    act(() => {
      result.current.onBlur(event);
    });

    expect(result.current.isFocused).toBe(false);
    expect(call).toHaveBeenCalledWith(props.form.handleBlur('test'), event);
  });

  describe('checks getErrorData method', () => {
    it('should return undefined', () => {
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
    result = renderHookWithProviders(() => useContainer({
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
    })).result;

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
