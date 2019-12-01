import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as S from './styled';

const ModalIconAreaComponent = ({ iconName, textId, theme }) => (
  <S.Wrap>
    <S.Icon name={iconName} size={84} color={theme.colors.grey100} />
    <S.Text>
      <FormattedMessage id={textId} />
    </S.Text>
  </S.Wrap>
);

ModalIconAreaComponent.propTypes = {
  iconName: PropTypes.string.isRequired,
  textId: PropTypes.string.isRequired,
  theme: PropTypes.shape({ colors: PropTypes.shape().isRequired }).isRequired,
};

export default ModalIconAreaComponent;
