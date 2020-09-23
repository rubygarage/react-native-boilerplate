import { LayoutAnimation } from 'react-native';

export const ANIMATION_DURATION = 250;

const doAnimationHook = () => {
  const doAnimation = () => {
    LayoutAnimation.configureNext({
      duration: ANIMATION_DURATION,
      update: {
        type: LayoutAnimation.Types.linear,
      },
    });
    LayoutAnimation.configureNext({
      duration: ANIMATION_DURATION,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleXY,
      },
    });
  };

  return {
    doAnimation,
  };
};

export default doAnimationHook;
