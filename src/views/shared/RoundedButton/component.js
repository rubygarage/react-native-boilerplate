import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import Icon from 'views/shared/Icon';
import * as S from './styled';

const RoundedButton = ({
  iconName, iconNameActive = iconName, isActive, onPress,
}) => {
  const theme = useContext(ThemeContext);

  const name = isActive ? iconNameActive : iconName;
  const color = isActive ? theme.colors.white : theme.colors.grey700;

  return (
    <S.Wrap onPress={onPress} isActive={isActive}>
      <Icon name={name} size={28} color={color} />
    </S.Wrap>
  );
};

RoundedButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  iconNameActive: PropTypes.string,
  isActive: PropTypes.bool,
};

RoundedButton.defaultProps = {
  iconNameActive: undefined,
  isActive: false,
};

export default RoundedButton;
