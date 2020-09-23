import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { hideModal } from 'state/modal/actions';

const useModalVisibility = () => {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(true);

  const onCloseModal = () => {
    setIsVisible(false);
  };

  const onDestroyModal = () => {
    dispatch(hideModal());
    setIsVisible(true);
  };

  return {
    isVisible,
    setIsVisible,
    onCloseModal,
    onDestroyModal,
  };
};

export default useModalVisibility;
