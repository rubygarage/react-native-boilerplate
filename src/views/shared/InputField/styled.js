import styled from 'styled-components/native';

const Wrap = styled.View`
  flex-direction: column;
`;

const Label = styled.Text`
  margin-bottom: 4;
  font-size: 14;
  line-height: 20;
  color: ${({ theme }) => theme.colors.black};
`;

const FieldWrap = styled.View`
  position: relative;
`;

const Field = styled.TextInput`
  border-radius: 3;
  min-height: 48;
  border-width: ${({ isFocused, isError }) => (isFocused && !isError ? 2 : 1)};
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
  padding-top: 10;
  padding-right: ${({ actionWidth }) => (actionWidth + 12)};
  padding-bottom: 10;
  padding-left: 12;
  font-size: 14;
  line-height: 20;
  color: ${({ theme }) => theme.colors.black};
`;

const FieldError = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6;
  margin-bottom: 8;
`;

const FieldErrorClose = styled.View`
  margin-right: 8;
`;

const FieldErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14;
  line-height: 20;
`;

const ActionButtonWrapper = styled.View`
  position: absolute;
  height: 48;
  right: 8;
  justify-content: center;
`;

export {
  Wrap, Label, FieldWrap, Field,
  FieldError, FieldErrorClose, FieldErrorMessage, ActionButtonWrapper,
};
