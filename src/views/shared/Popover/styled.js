import styled from 'styled-components/native';
import PopoverView from 'react-native-popover-view';

const Popover = styled(PopoverView).attrs(({ theme }) => ({
  arrowStyle: { backgroundColor: 'transparent' },
  backgroundStyle: { backgroundColor: 'transparent' },
  popoverStyle: {
    elevation: 2,
    borderRadius: 4,
    shadowColor: theme.colors.grey900,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    overflow: 'visible',
  },
}))``;

// eslint-disable-next-line import/prefer-default-export
export { Popover };
