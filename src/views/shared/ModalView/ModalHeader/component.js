import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';

import * as S from './styled';

const ModalHeaderComponent = ({ children, isClosable, onClose, theme }) => (
  <S.Wrap>
    {isClosable
      && (
        <S.Close onPress={onClose}>
          <Icon name="cross" size={24} color={theme.colors.grey500} />
        </S.Close>
      )}
    <S.Title>
      {children}
    </S.Title>
  </S.Wrap>
);

ModalHeaderComponent.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({ colors: PropTypes.shape().isRequired }).isRequired,
  isClosable: PropTypes.bool,
  onClose: PropTypes.func,
};

ModalHeaderComponent.defaultProps = {
  isClosable: false,
  onClose: undefined,
};

export default ModalHeaderComponent;
