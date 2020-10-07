import styled from 'styled-components/native';

const Wrap = styled.View`
  flex-direction: column;
`;

const Label = styled.Text`
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

const FieldWrap = styled.View`
  position: relative;
`;

const Field = styled.TextInput`
  border-radius: 3px;
  min-height: 48px;
  border-width: ${({ isFocused, isError }) => (isFocused && !isError ? '2px' : '1px')};
  border-style: solid;
  border-color: ${({ theme, isError, isFocused }) => {
    if (isError) {
      return theme.colors.black;
    }
    if (isFocused) {
      return theme.colors.black;
    }
    return theme.colors.black;
  }};
  padding-top: 10px;
  padding-right: ${({ actionWidth }) => (actionWidth + 12)}px;
  padding-bottom: 10px;
  padding-left: 12px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

const FieldError = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 8px;
`;

const FieldErrorClose = styled.View`
  margin-right: 8px;
`;

const FieldErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  line-height: 20px;
`;

const ActionButtonWrapper = styled.View`
  position: absolute;
  height: 48px;
  right: 8px;
  justify-content: center;
`;

export {
  Wrap, Label, FieldWrap, Field,
  FieldError, FieldErrorClose, FieldErrorMessage, ActionButtonWrapper,
};
