import styled from 'styled-components/native';

const Wrap = styled.TouchableOpacity`
  min-width: ${(props) => (props.isSmallWidth ? 72 : 136)}px;
  height: ${(props) => (props.isSmallHeight ? '36px' : '48px')};
  justify-content: center;
  align-items: center;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 4px;
  flex-shrink: 0;
  background-color: ${({ theme, isOutline, fillColor }) => (isOutline ? theme.colors.white : fillColor)};
  margin-right: ${(props) => (props.isMarginRight ? '16px' : '0')};
  margin-bottom: ${(props) => (props.isMarginBottom ? '16px' : '0')};
  border-width: ${(props) => (props.isBorder ? '2px' : '0')};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.black};
`;

const Text = styled.Text`
  color: ${({ theme, isOutline }) => (isOutline ? theme.colors.black : theme.colors.white)};
  font-weight: bold;
`;

export { Wrap, Text };
