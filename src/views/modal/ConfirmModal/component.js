import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { ThemeContext } from 'styled-components';

import ModalView from 'views/shared/ModalView';
import ModalHeader from 'views/shared/ModalView/ModalHeader';
import ModalBody from 'views/shared/ModalView/ModalBody';
import ModalFooter from 'views/shared/ModalView/ModalFooter';
import ModalText from 'views/shared/ModalView/ModalText';
import Button from 'views/shared/Button';

import useConfirmModalState from './hooks/useConfirmModalState';

const ConfirmModalComponent = ({
  isVisible, onCloseModal, title, body, confirm,
  dismiss, onDestroyModal, confirmAction,
}) => {
  const theme = useContext(ThemeContext);

  const {
    onModalHide,
    onShouldConfirm,
  } = useConfirmModalState({
    onDestroyModal,
    onCloseModal,
    confirmAction,
  });

  return (
    <ModalView isVisible={isVisible} onModalHide={onModalHide}>
      <ModalHeader isClosable onClose={onCloseModal}>
        <FormattedMessage {...title} />
      </ModalHeader>
      <ModalBody>
        {body.map((text) => (
          <ModalText key={text.id}>
            <FormattedMessage {...text} />
          </ModalText>
        ))}
      </ModalBody>

      <ModalFooter>
        <Button
          isSmallWidth
          isOutline
          isMarginRight
          onPress={onCloseModal}
        >
          <FormattedMessage {...dismiss} />
        </Button>
        <Button
          fillColor={theme.colors.red500}
          onPress={onShouldConfirm}
        >
          <FormattedMessage {...confirm} />
        </Button>
      </ModalFooter>
    </ModalView>
  );
};

ConfirmModalComponent.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onModalHide: PropTypes.func.isRequired,
  onShouldConfirm: PropTypes.func.isRequired,
  title: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  confirm: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  body: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  dismiss: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  onDestroyModal: PropTypes.func.isRequired,
  confirmAction: PropTypes.shape().isRequired,
};

ConfirmModalComponent.defaultProps = {
  dismiss: { id: 'shared.cancel' },
};

export default ConfirmModalComponent;
