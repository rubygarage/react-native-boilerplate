import React from 'react';
import PropTypes from 'prop-types';

import MODAL_COMPONENTS from './modalComponents';

const ModalRoot = ({
  modalType,
  modalProps,
  isVisible,
  onCloseModal,
  onDestroyModal,
}) => {
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

ModalRoot.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onDestroyModal: PropTypes.func.isRequired,
  modalType: PropTypes.string,
  modalProps: PropTypes.shape(),
};

ModalRoot.defaultProps = {
  modalType: null,
  modalProps: {},
};

export default ModalRoot;
