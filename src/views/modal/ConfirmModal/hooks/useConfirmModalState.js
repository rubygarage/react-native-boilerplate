import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useConfirmModalState = (props) => {
  const { onCloseModal, onDestroyModal, confirmAction } = props;

  const dispatch = useDispatch();

  const [isShouldConfirm, setShouldConfirm] = useState(false);

  const handleShouldConfirm = () => {
    setShouldConfirm(true);
    onCloseModal();
  };

  const onModalHide = () => {
    if (isShouldConfirm) {
      dispatch(confirmAction);
    }
    onDestroyModal();
  };

  return {
    handleShouldConfirm,
    onModalHide,
    setShouldConfirm,
    isShouldConfirm,
  };
};

export default useConfirmModalState;
