import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Icon from 'views/shared/Icon';
import Button from 'views/shared/Button';

import useContainer from './hook';
import * as S from './styled';

const InputFieldComponent = (props) => {
  const {
    labelId,
    placeholderId,
    actionId,
    onActionClick,
    field: { name, value },
    form: { handleChange },
  } = props;

  const {
    isFocused,
    actionWidth,
    onActionRendered,
    onFocus,
    onBlur,
    getErrorData,
    theme,
    intl,
  } = useContainer(props);

  const { errorId, errorValues, errorIcon } = getErrorData();

  return (
    <S.Wrap>
      {labelId
      && (
        <S.Label>
          <FormattedMessage id={labelId} />
        </S.Label>
      )}
      <S.FieldWrap>
        <S.Field
          placeholder={intl.formatMessage({ id: placeholderId })}
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
};

InputFieldComponent.propTypes = {
  placeholderId: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    errors: PropTypes.shape().isRequired,
  }).isRequired,
  onActionClick: PropTypes.func,
  labelId: PropTypes.string,
  actionId: PropTypes.string,
};

InputFieldComponent.defaultProps = {
  onActionClick: undefined,
  labelId: undefined,
  actionId: undefined,
};

export default InputFieldComponent;
