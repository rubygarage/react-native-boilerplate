import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Icon from 'views/shared/Icon';
import Button from 'views/shared/Button';
import * as S from './styled';

const InputFieldComponent = ({
  labelId,
  placeholderId,
  errorId,
  errorValues,
  errorIcon,
  actionId,
  theme,
  onActionRendered,
  onFocus,
  onBlur,
  actionWidth,
  onActionClick,
  isFocused,
  field: { name, value },
  form: { handleChange },
  intl: { formatMessage },
}) => (
  <S.Wrap>
    {labelId
      && (
        <S.Label>
          <FormattedMessage id={labelId} />
        </S.Label>
      )}
    <S.FieldWrap>
      <S.Field
        placeholder={formatMessage({ id: placeholderId })}
        onChangeText={handleChange(name)}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        actionWidth={actionWidth}
        isFocused={isFocused}
        isError={Boolean(errorId)}
      />
      {errorId
        && (
          <S.FieldError>
            <S.FieldErrorClose>
              <Icon name={errorIcon} size={16} color={theme.colors.red500} />
            </S.FieldErrorClose>
            <S.FieldErrorMessage>
              <FormattedMessage id={errorId} values={errorValues} />
            </S.FieldErrorMessage>
          </S.FieldError>
        )}
      {onActionClick && actionId
        && (
          <S.ActionButtonWrapper onLayout={onActionRendered}>
            <Button isSmallWidth isSmallHeight onPress={onActionClick}>
              <FormattedMessage id={actionId} />
            </Button>
          </S.ActionButtonWrapper>
        )}
    </S.FieldWrap>
  </S.Wrap>
);

InputFieldComponent.propTypes = {
  placeholderId: PropTypes.string.isRequired,
  onActionRendered: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  actionWidth: PropTypes.number.isRequired,
  isFocused: PropTypes.bool.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }).isRequired,
  errorValues: PropTypes.shape(),
  form: PropTypes.shape({ handleChange: PropTypes.func.isRequired }).isRequired,
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
  theme: PropTypes.shape({ colors: PropTypes.shape().isRequired }).isRequired,
  onActionClick: PropTypes.func,
  labelId: PropTypes.string,
  errorId: PropTypes.string,
  errorIcon: PropTypes.string,
  actionId: PropTypes.string,
};

InputFieldComponent.defaultProps = {
  onActionClick: undefined,
  labelId: undefined,
  errorId: undefined,
  errorIcon: undefined,
  actionId: undefined,
  errorValues: undefined,
};

export default InputFieldComponent;
