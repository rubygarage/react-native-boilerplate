import React from 'react';

import MODAL_COMPONENTS from './modalComponents';
import useContainer from './hook';

const ModalRoot = () => {
  const {
    modalType,
    modalProps,
    isVisible,
    onCloseModal,
    onDestroyModal,
  } = useContainer();

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
