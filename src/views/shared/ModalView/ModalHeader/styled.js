import styled from 'styled-components/native';

const Wrap = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  padding: 16px 24px;
  border-bottom-color: rgba(82,97,115, 0.12);
  border-bottom-width: 1px;
  border-style: solid;
`;

const Title = styled.Text`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;

const Close = styled.TouchableOpacity`
  flex-shrink: 0;
  margin-right: 16px;
`;

export { Wrap, Title, Close };
