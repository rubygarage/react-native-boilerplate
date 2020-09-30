import { useState } from 'react';
import { useDispatch } from 'react-redux';

import useTheme from 'lib/hooks/useTheme';

const useContainer = (props) => {
  const theme = useTheme();

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
    theme,
    handleShouldConfirm,
    onModalHide,
  };
};

export default useContainer;
