import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { hideFlash } from 'state/flash/actions';

const useContainer = (props) => {
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

  useEffect(() => {
    if (lifetime) {
      timerHandle.current = setInterval(onHideFlash, lifetime);
    }

    return () => {
      clearInterval(timerHandle.current);
    };
  }, []);

  return {
    onHideFlash,
    onActionClick,
  };
};

export default useContainer;
