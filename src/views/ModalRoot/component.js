import React from 'react';
import { useSelector } from 'react-redux';

import { modalTypeSelector, modalPropsSelector } from 'state/modal/selectors';

import MODAL_COMPONENTS from './modalComponents';
import useModalVisibility from './hooks/useModalVisibility';

const ModalRoot = () => {
  const modalType = useSelector(modalTypeSelector);
  const modalProps = useSelector(modalPropsSelector);

  const {
    isVisible,
    onCloseModal,
    onDestroyModal,
  } = useModalVisibility();

  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType].modal;

  return (
    <SpecificModal
      isVisible={isVisible}
      onCloseModal={onCloseModal}
      onDestroyModal={onDestroyModal}
      {...modalProps}
    />
  );
};

export default ModalRoot;
