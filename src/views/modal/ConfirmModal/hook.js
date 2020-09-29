import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { useDispatch } from 'react-redux';

const useContainer = (props) => {
  const theme = useContext(ThemeContext);

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
    setShouldConfirm,
    isShouldConfirm,
  };
};

export default useContainer;
