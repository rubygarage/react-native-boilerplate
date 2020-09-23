import { renderHook, act } from '@testing-library/react-hooks';
import { LayoutAnimation } from 'react-native';

import doAnimationHook, { ANIMATION_DURATION } from '../doAnimationHook';

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');

  RN.LayoutAnimation.configureNext = jest.fn();

  return RN;
});

describe('doAnimationHook', () => {
  it('matches snapshot', () => {
    const { result } = renderHook(() => doAnimationHook());

    expect(result.current).toMatchSnapshot();
  });

  it('checks onActionRendered method', () => {
    const { result } = renderHook(() => doAnimationHook());

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
});
