import React, { useContext } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { is } from 'ramda';
import { FormattedMessage } from 'react-intl';

import { ThemeContext } from 'styled-components';

import { ALERT_TYPES } from 'constants/alert';
import Icon from 'views/shared/Icon';
import * as S from './styled';

export const getStyleProps = (type, theme) => {
  switch (type) {
    case ALERT_TYPES.error:
      return { iconName: 'close', contentColor: theme.colors.red500, backgroundColor: theme.colors.red50 };
    case ALERT_TYPES.success:
      return { iconName: 'tick', contentColor: theme.colors.green500, backgroundColor: theme.colors.green50 };
    default:
      return { iconName: 'info', contentColor: theme.colors.blue500, backgroundColor: theme.colors.blue50 };
  }
};

const Alert = ({
  title,
  subtitle,
  message,
  onCloseClick,
  onActionClick,
  actionIconName,
  actionTextId,
  type,
}) => {
  const theme = useContext(ThemeContext);

  const {
    backgroundColor,
    iconName,
    contentColor,
  } = getStyleProps(type, theme);

  return (
    <S.Wrapper color={backgroundColor} onCloseClick={onCloseClick}>
      <S.IconWrap>
        <Icon name={iconName} size={28} color={contentColor} />
      </S.IconWrap>
      <S.ContentArea>
        <Text>
          <S.MessageTitle color={contentColor}>
            {is(Object, title) ? <FormattedMessage id={title.id} /> : title}
          </S.MessageTitle>
          {subtitle && (
          <S.MessageText color={contentColor}>
            {is(Object, subtitle) ? <FormattedMessage id={subtitle.id} /> : subtitle}
          </S.MessageText>
          )}
        </Text>
        {message && (
        <S.MessageText color={contentColor}>
          {is(Object, message) ? <FormattedMessage id={message.id} /> : message}
        </S.MessageText>
        )}
        {onActionClick && actionTextId
        && (
          <S.ActionButton color={contentColor} onPress={onActionClick}>
            {actionIconName && (
              <S.ActionIcon name={actionIconName} size={28} color={theme.colors.white} />
            )}
            <S.ActionButtonText>
              <FormattedMessage id={actionTextId} />
            </S.ActionButtonText>
          </S.ActionButton>
        )}
      </S.ContentArea>
      {onCloseClick
      && (
        <S.CloseButton onPress={onCloseClick}>
          <Icon name="cross" size={28} color={contentColor} />
        </S.CloseButton>
      )}
    </S.Wrapper>
  );
};

Alert.propTypes = {
  title: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  message: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  type: PropTypes.string.isRequired,
  onCloseClick: PropTypes.func,
  onActionClick: PropTypes.func,
  actionIconName: PropTypes.string,
  actionTextId: PropTypes.string,
};

Alert.defaultProps = {
  subtitle: undefined,
  message: undefined,
  onCloseClick: undefined,
  onActionClick: undefined,
  actionIconName: undefined,
  actionTextId: undefined,
};

export default Alert;
