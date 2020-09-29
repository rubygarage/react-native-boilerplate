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

  let result = null;

  beforeEach(() => {
    result = renderHookWithProviders(() => useContainer(props)).result;
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('checks detectLabel method', () => {
    it('should return right label', () => {
      let label = null;

      act(() => {
        label = result.current.detectLabel();
      });

      expect(label).toBe('label');
    });

    it('should return right label', () => {
      result = renderHookWithProviders(() => useContainer({
        ...props,
        selectedValue: 'test1',
      })).result;

      let label = null;

      act(() => {
        label = result.current.detectLabel();
      });

      expect(label).toBe('label1');
    });

    it('should return undefined', () => {
      result = renderHookWithProviders(() => useContainer({
        ...props,
        selectedValue: 'some',
      })).result;

      let label = null;

      act(() => {
        label = result.current.detectLabel();
      });

      expect(label).toBeFalsy();
    });
  });

  it('checks handlePickerToggle method', () => {
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

    act(() => {
      result.current.handleValueChange(value);
    });

    expect(result.current.isOpen).toBe(true);
    expect(props.onValueChange).toHaveBeenCalledWith(value);
  });
});
