import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UIManager, LayoutAnimation } from 'react-native';

import { flashesSelector } from 'state/flash/selectors';

export const ANIMATION_DURATION = 250;

const useContainer = () => {
  const flashes = useSelector(flashesSelector);

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

  const didMount = () => {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  };

  useEffect(didMount, []);

  useEffect(doAnimation, [flashes.length]);

  return {
    didMount,
    doAnimation,
  };
};

export default useContainer;
