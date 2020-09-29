import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { modalTypeSelector, modalPropsSelector } from 'state/modal/selectors';
import { hideModal } from 'state/modal/actions';

const useContainer = () => {
  const modalType = useSelector(modalTypeSelector);
  const modalProps = useSelector(modalPropsSelector);

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
    modalType,
    modalProps,
    isVisible,
    setIsVisible,
    onCloseModal,
    onDestroyModal,
  };
};

export default useContainer;
