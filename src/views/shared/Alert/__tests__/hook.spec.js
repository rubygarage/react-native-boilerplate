import { act } from '@testing-library/react-hooks';

import { ALERT_TYPES } from 'constants/alert';
import renderHookWithProviders from 'utils/testHelpers/renderHookWithProviders';

import useContainer from '../hook';

describe('Alert useContainer hook', () => {
  const { result } = renderHookWithProviders(() => useContainer());

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('getStyleProps', () => {
    let style = null;

    it('returns info style props', () => {
      const { getStyleProps, theme } = result.current;

      act(() => {
        style = getStyleProps(ALERT_TYPES.info);
      });

      expect(style).toEqual({
        contentColor: theme.colors.blue500,
        backgroundColor: theme.colors.blue50,
        iconName: 'info',
      });
    });

    it('returns error style props', () => {
      const { getStyleProps, theme } = result.current;

      act(() => {
        style = getStyleProps(ALERT_TYPES.error);
      });

      expect(style).toEqual({
        contentColor: theme.colors.red500,
        backgroundColor: theme.colors.red50,
        iconName: 'close',
      });
    });

    it('returns success style props', () => {
      const { getStyleProps, theme } = result.current;

      act(() => {
        style = getStyleProps(ALERT_TYPES.success);
      });

      expect(style).toEqual({
        contentColor: theme.colors.green500,
        backgroundColor: theme.colors.green50,
        iconName: 'tick',
      });
    });
  });
});
