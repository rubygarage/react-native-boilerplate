import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import ModalView from 'views/shared/ModalView';
import ModalHeader from 'views/shared/ModalView/ModalHeader';
import ModalBody from 'views/shared/ModalView/ModalBody';
import ModalFooter from 'views/shared/ModalView/ModalFooter';
import ModalText from 'views/shared/ModalView/ModalText';
import Button from 'views/shared/Button';

const InfoModal = ({
  isVisible, onCloseModal, onDestroyModal, title, detail,
}) => (
  <ModalView
    isVisible={isVisible}
    onModalHide={onDestroyModal}
  >
    <ModalHeader>
      {title}
    </ModalHeader>
    <ModalBody>
      <ModalText>
        {detail}
      </ModalText>
    </ModalBody>
    <ModalFooter>
      <Button onPress={onCloseModal}>
        <FormattedMessage id="shared.ok" />
      </Button>
    </ModalFooter>
  </ModalView>
);

InfoModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onDestroyModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export default InfoModal;
