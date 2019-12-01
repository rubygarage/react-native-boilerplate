import styled from 'styled-components/native';

import IconView from 'views/shared/Icon';

const Wrap = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 24;
  margin-bottom: 24;
`;

const Icon = styled(IconView)`
  margin-bottom: 16;
`;

const Text = styled.Text`
  font-size: 14;
  line-height: 20;
  color: ${({ theme }) => theme.colors.black};
`;

export { Wrap, Icon, Text };
