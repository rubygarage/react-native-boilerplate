import styled from 'styled-components/native';

import Icon from 'views/shared/Icon';

const Wrapper = styled.View`
  position: relative;
  flex-direction: row;
  margin-bottom: 8;
  padding-top: 12;
  padding-right: ${({ onCloseClick }) => (onCloseClick ? 48 : 12)};
  padding-bottom: 12;
  padding-left: 12;
  border-radius: 4;
  background-color: ${({ color }) => color};
`;

const IconWrap = styled.View`
  margin-right: 12;
  flex-shrink: 0;
`;

const ContentArea = styled.View`
  flex-grow: 1;
  padding-right: 36;
  display: flex;
  align-items: flex-start;
`;

const MessageTitle = styled.Text`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2;
  font-size: 14;
  line-height: 20;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const MessageText = styled.Text`
  margin-bottom: 2;
  font-size: 14;
  line-height: 20;
  color: ${({ color }) => color};
`;

const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  max-width: 200;
  height: 36;
  margin-top: 8;
  padding-right: 12;
  padding-left: 12;
  border-radius: 4;
  background-color: ${({ color }) => color};
`;

const ActionIcon = styled(Icon)`
  margin-right: 24;
`;

const ActionButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14;
  line-height: 20;
  font-weight: bold;
  letter-spacing: -0.2;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 12;
  right: 12;
  color: ${({ theme }) => theme.colors.white};
`;

export {
  Wrapper,
  IconWrap,
  ContentArea,
  MessageTitle,
  MessageText,
  ActionButton,
  ActionButtonText,
  CloseButton,
  ActionIcon,
};
