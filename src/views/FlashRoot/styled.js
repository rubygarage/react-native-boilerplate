import styled from 'styled-components/native';

const List = styled.FlatList`
  position: absolute;
  top: ${({ topInset }) => topInset};
  width: 100%;
  margin-top: 12;
  margin-bottom: 12;
  padding-left: 12;
  padding-right: 12;
  z-index: 5;
`;

// eslint-disable-next-line import/prefer-default-export
export { List };
