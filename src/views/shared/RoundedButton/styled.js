import styled from 'styled-components/native';

const Wrap = styled.TouchableOpacity`
  width: 48;
  height: 48;
  align-items: center;
  justify-content: center;
  border-width: 1;
  border-style: solid;
  border-color: ${({ theme, isActive }) => (isActive ? theme.colors.black : theme.colors.white)};
  border-radius: 24;
  overflow: hidden;
  flex-shrink: 0;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.black)};
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrap };
