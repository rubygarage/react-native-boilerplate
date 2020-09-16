import styled from 'styled-components/native';

const AppBody = styled.View`
  position: relative;
  flex-grow: 1;
  padding-right: 16px;
  padding-left: 16px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export default AppBody;
