import styled from 'styled-components/native';

const List = styled.FlatList`
  position: absolute;
  top: ${({ topInset }) => topInset}px;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  z-index: 5;
`;

// eslint-disable-next-line import/prefer-default-export
export { List };
