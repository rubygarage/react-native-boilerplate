import { act } from '@testing-library/react-hooks';

import renderHookWithProviders from 'utils/testHelpers/renderHookWithProviders';

import useContainer from '../hook';

describe('Picker useContainer hook', () => {
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
    const { result } = renderHookWithProviders(() => useContainer(props));

    expect(result.current).toMatchSnapshot();
  });

  describe('checks detectLabel method', () => {
    it('should return right label', () => {
      const { result } = renderHookWithProviders(() => useContainer(props));

      let label = null;

      act(() => {
        label = result.current.detectLabel();
      });

      expect(label).toBe('label');
    });

    it('should return right label', () => {
      const { result } = renderHookWithProviders(() => useContainer({
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
      const { result } = renderHookWithProviders(() => useContainer({
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
    const { result } = renderHookWithProviders(() => useContainer(props));

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

    const { result } = renderHookWithProviders(() => useContainer(props));

    act(() => {
      result.current.handleValueChange(value);
    });

    expect(result.current.isOpen).toBe(true);
    expect(props.onValueChange).toHaveBeenCalledWith(value);
  });
});
