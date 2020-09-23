import { useState } from 'react';
import { call, path, pathOr } from 'ramda';

function useInputState(props) {
  const {
    field: { name },
    form: { handleBlur, errors },
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [actionWidth, setActionWidth] = useState(0);

  /**
   * On Action required.
   */
  const onActionRendered = (event) => {
    const { width } = event.nativeEvent.layout;

    setActionWidth(width);
  };

  /**
   * On focus handler.
   */
  const onFocus = () => {
    setIsFocused(true);
  };

  /**
   * On Blur handler
   */
  const onBlur = (event) => {
    call(handleBlur(name), event);
    setIsFocused(false);
  };

  /**
   * Error data
   */
  const getErrorData = () => {
    const errorId = path([name, 'id'], errors);
    const errorValues = path([name, 'values'], errors);
    const errorIcon = pathOr('alert', [name, 'icon'], errors);
    return { errorId, errorValues, errorIcon };
  };

  return {
    isFocused,
    actionWidth,
    onActionRendered,
    onFocus,
    onBlur,
    getErrorData,
    setIsFocused,
    setActionWidth,
  };
}

export default useInputState;
