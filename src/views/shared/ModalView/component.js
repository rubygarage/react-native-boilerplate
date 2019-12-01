import React from 'react';
import PropTypes from 'prop-types';
import SafeAreaView from 'react-native-safe-area-view';

import * as S from './styled';

const ModalView = ({
  isVisible, onClose, children, onModalShow, onModalHide,
}) => (
  <S.Modal
    coverScreen={false}
    isVisible={isVisible}
    onBackButtonPress={onClose}
    onBackdropPress={onClose}
    onModalShow={onModalShow}
    onModalHide={onModalHide}
  >
    <S.Container>
      <SafeAreaView>
        {children}
      </SafeAreaView>
    </S.Container>
  </S.Modal>
);

ModalView.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onModalShow: PropTypes.func,
  onModalHide: PropTypes.func,
};

ModalView.defaultProps = {
  onModalShow: undefined,
  onModalHide: undefined,
  onClose: undefined,
};

export default ModalView;
