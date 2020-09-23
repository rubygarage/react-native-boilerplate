import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { hideFlash } from 'state/flash/actions';

const useFlashMethods = (props) => {
  const timerHandle = useRef();

  const dispatch = useDispatch();

  const {
    id,
    flashProps: { action },
    doAnimation,
    lifetime,
  } = props;

  const onHideFlash = () => {
    dispatch(hideFlash(id));
    doAnimation();
  };

  const onActionClick = () => {
    dispatch(hideFlash(id));
    dispatch(action);
  };

  const didMount = () => {
    if (lifetime) {
      timerHandle.current = setInterval(onHideFlash, lifetime);
    }

    return () => {
      clearInterval(timerHandle.current);
    };
  };

  useEffect(didMount, []);

  return {
    onHideFlash,
    onActionClick,
    didMount,
  };
};

export default useFlashMethods;
