import styled from 'styled-components/native';

const Wrap = styled.TouchableOpacity`
  min-width: ${(props) => (props.isSmallWidth ? 72 : 136)};
  height: ${(props) => (props.isSmallHeight ? '36px' : '48px')};
  justify-content: center;
  align-items: center;
  padding-right: 8;
  padding-left: 8;
  border-radius: 4;
  flex-shrink: 0;
  background-color: ${({ theme, isOutline, fillColor }) => (isOutline ? theme.colors.white : fillColor)};
  margin-right: ${(props) => (props.isMarginRight ? '16' : '0')};
  margin-bottom: ${(props) => (props.isMarginBottom ? '16' : '0')};
  border-width: ${(props) => (props.isBorder ? '2' : '0')};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.black};
`;

const Text = styled.Text`
  color: ${({ theme, isOutline }) => (isOutline ? theme.colors.black : theme.colors.white)};
  font-weight: bold;
`;

export { Wrap, Text };
