import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, ViewPropTypes } from 'react-native';

import * as S from './styled';

const Button = ({
  children, isOutline, isLoading, isBorder, disabled,
  isMarginRight, isMarginBottom, isSmallWidth,
  onPress, theme, isSmallHeight, fillColor = theme.colors.blue200,
  style,
}) => (
  <S.Wrap
    style={style}
    isOutline={isOutline}
    isBorder={isBorder}
    isMarginRight={isMarginRight}
    isMarginBottom={isMarginBottom}
    isSmallWidth={isSmallWidth}
    isSmallHeight={isSmallHeight}
    onPress={onPress}
    fillColor={fillColor}
    disabled={disabled}
  >
    {isLoading
      ? <ActivityIndicator size="large" color={theme.colors.white} />
      : <S.Text isOutline={isOutline} fillColor={fillColor}>{children}</S.Text>}
  </S.Wrap>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({ colors: PropTypes.shape().isRequired }).isRequired,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool,
  isOutline: PropTypes.bool,
  isBorder: PropTypes.bool,
  isMarginRight: PropTypes.bool,
  isMarginBottom: PropTypes.bool,
  isSmallWidth: PropTypes.bool,
  isSmallHeight: PropTypes.bool,
  disabled: PropTypes.bool,
  fillColor: PropTypes.string,
  style: ViewPropTypes.style,
};

Button.defaultProps = {
  onPress: undefined,
  isLoading: false,
  isOutline: false,
  isBorder: false,
  isMarginRight: false,
  isMarginBottom: false,
  isSmallWidth: false,
  isSmallHeight: false,
  disabled: false,
  fillColor: undefined,
  style: undefined,
};

export default Button;
