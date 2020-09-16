import styled from 'styled-components/native';

import Icon from 'views/shared/Icon';

const Wrapper = styled.View`
  position: relative;
  flex-direction: row;
  margin-bottom: 8px;
  padding-top: 12px;
  padding-right: ${({ onCloseClick }) => (onCloseClick ? '48px' : '12px')};
  padding-bottom: 12px;
  padding-left: 12px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
`;

const IconWrap = styled.View`
  margin-right: 12px;
  flex-shrink: 0;
`;

const ContentArea = styled.View`
  flex-grow: 1;
  padding-right: 36px;
  display: flex;
  align-items: flex-start;
`;

const MessageTitle = styled.Text`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2px;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const MessageText = styled.Text`
  margin-bottom: 2px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ color }) => color};
`;

const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  max-width: 200px;
  height: 36px;
  margin-top: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
`;

const ActionIcon = styled(Icon)`
  margin-right: 24px;
`;

const ActionButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  letter-spacing: -0.2px;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 12px;
  right: 12px;
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
