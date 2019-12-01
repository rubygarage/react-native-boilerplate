import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { is } from 'ramda';
import { FormattedMessage } from 'react-intl';

import Icon from 'views/shared/Icon';
import * as S from './styled';

const Alert = ({
  title,
  subtitle,
  message,
  onCloseClick,
  iconName,
  contentColor,
  backgroundColor,
  onActionClick,
  actionIconName,
  actionTextId,
  theme,
}) => (
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

Alert.propTypes = {
  title: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  message: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  theme: PropTypes.shape({ colors: PropTypes.shape().isRequired }).isRequired,
  iconName: PropTypes.string.isRequired,
  contentColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
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
