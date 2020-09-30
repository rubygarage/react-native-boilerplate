import { useState } from 'react';
import { call, path, pathOr } from 'ramda';
import { useIntl } from 'react-intl';

import useTheme from 'lib/hooks/useTheme';

function useContainer(props) {
  const {
    field: { name },
    form: { handleBlur, errors },
  } = props;

  const intl = useIntl();
  const theme = useTheme();

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
    intl,
    theme,
  };
}

export default useContainer;
