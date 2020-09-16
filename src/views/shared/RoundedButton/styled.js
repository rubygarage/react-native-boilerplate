import styled from 'styled-components/native';

const Wrap = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, isActive }) => (isActive ? theme.colors.black : theme.colors.white)};
  border-radius: 24px;
  overflow: hidden;
  flex-shrink: 0;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.black)};
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrap };
