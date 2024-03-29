import styled from 'styled-components/native';

import IconView from 'views/shared/Icon';

const Wrap = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Icon = styled(IconView)`
  margin-bottom: 16px;
`;

const Text = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export { Wrap, Icon, Text };
