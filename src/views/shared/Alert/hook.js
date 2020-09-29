import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ALERT_TYPES } from 'constants/alert';

const useContainer = () => {
  const theme = useContext(ThemeContext);

  const getStyleProps = (type) => {
    switch (type) {
      case ALERT_TYPES.error:
        return { iconName: 'close', contentColor: theme.colors.red500, backgroundColor: theme.colors.red50 };
      case ALERT_TYPES.success:
        return { iconName: 'tick', contentColor: theme.colors.green500, backgroundColor: theme.colors.green50 };
      default:
        return { iconName: 'info', contentColor: theme.colors.blue500, backgroundColor: theme.colors.blue50 };
    }
  };

  return {
    theme,
    getStyleProps,
  };
};

export default useContainer;
