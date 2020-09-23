import { renderHook, act } from '@testing-library/react-hooks';

import usePickerState from '../usePickerState';

describe('useInputState custom hook', () => {
  const props = {
    selectedValue: 'test',
    options: [
      { value: 'test', label: 'label' },
      { value: 'test1', label: 'label1' },
    ],
    intl: {
      formatMessage: jest.fn(),
    },
    onValueChange: jest.fn(),
  };

  it('matches snapshot', () => {
    const { result } = renderHook(() => usePickerState(props));

    expect(result.current).toMatchSnapshot();
  });

  describe('checks detectLabel method', () => {
    it('should return right label', () => {
      const { result } = renderHook(() => usePickerState(props));

      let label = null;

      act(() => {
        label = result.current.detectLabel();
      });

      expect(label).toBe('label');
    });

    it('should return right label', () => {
      const { result } = renderHook(() => usePickerState({
        ...props,
        selectedValue: 'test1',
      }));

      let label = null;

      act(() => {
        label = result.current.detectLabel();
      });

      expect(label).toBe('label1');
    });

    it('should return undefined', () => {
      const { result } = renderHook(() => usePickerState({
        ...props,
        selectedValue: 'some',
      }));

      let label = null;

      act(() => {
        label = result.current.detectLabel();
      });

      expect(label).toBeFalsy();
    });
  });

  it('checks handlePickerToggle method', () => {
    const { result } = renderHook(() => usePickerState(props));

    act(() => {
      result.current.handlePickerToggle();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.handlePickerToggle();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('checks handleValueChange method', () => {
    const value = 'test';

    const { result } = renderHook(() => usePickerState(props));

    act(() => {
      result.current.handleValueChange(value);
    });

    expect(result.current.isOpen).toBe(true);
    expect(props.onValueChange).toHaveBeenCalledWith(value);
  });
});
