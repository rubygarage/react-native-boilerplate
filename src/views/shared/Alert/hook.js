import { ALERT_TYPES } from 'constants/alert';
import useTheme from 'lib/hooks/useTheme';

const useContainer = () => {
  const theme = useTheme();

  return {
    theme,
    styleProps: {
      [ALERT_TYPES.error]: { iconName: 'close', contentColor: theme.colors.red500, backgroundColor: theme.colors.red50 },
      [ALERT_TYPES.success]: { iconName: 'tick', contentColor: theme.colors.green500, backgroundColor: theme.colors.green50 },
      [ALERT_TYPES.info]: { iconName: 'info', contentColor: theme.colors.blue500, backgroundColor: theme.colors.blue50 },
    },
  };
};

export default useContainer;
