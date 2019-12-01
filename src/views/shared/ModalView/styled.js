import styled from 'styled-components/native';
import ModalView from 'react-native-modal';

const Modal = styled(ModalView)`
  flex-grow: 1;
  justify-content: flex-end;
  margin: 0;
`;

const Overlay = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
`;

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 4;
  border-top-right-radius: 4;
`;

export { Modal, Overlay, Container };
