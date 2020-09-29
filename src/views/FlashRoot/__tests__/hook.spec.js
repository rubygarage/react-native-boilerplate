import { act } from '@testing-library/react-hooks';
import { LayoutAnimation, UIManager } from 'react-native';

import renderHookWithProviders from 'utils/testHelpers/renderHookWithProviders';

import useContainer, { ANIMATION_DURATION } from '../hook';

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');

  RN.LayoutAnimation.configureNext = jest.fn();
  RN.UIManager.setLayoutAnimationEnabledExperimental = jest.fn();

  return RN;
});

describe('FlashRoot useContainer hook', () => {
  const { result } = renderHookWithProviders(() => useContainer());

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('checks doAnimation method', () => {
    LayoutAnimation.configureNext.mockReset();

    act(() => {
      result.current.doAnimation();
    });

    expect(LayoutAnimation.configureNext).toHaveBeenCalledTimes(2);

    expect(LayoutAnimation.configureNext).toHaveBeenNthCalledWith(1, {
      duration: ANIMATION_DURATION,
      update: {
        type: LayoutAnimation.Types.linear,
      },
    });

    expect(LayoutAnimation.configureNext).toHaveBeenNthCalledWith(2, {
      duration: ANIMATION_DURATION,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleXY,
      },
    });
  });

  describe('checks didMount method', () => {
    it('should call setLayoutAnimationEnabledExperimental', () => {
      act(() => {
        result.current.didMount();
      });

      expect(UIManager.setLayoutAnimationEnabledExperimental).toHaveBeenCalledWith(true);
    });

    it('should not call setLayoutAnimationEnabledExperimental', () => {
      UIManager.setLayoutAnimationEnabledExperimental = null;

      act(() => {
        result.current.didMount();
      });

      expect(UIManager.setLayoutAnimationEnabledExperimental).toBeFalsy();
    });
  });
});
