import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import * as S from './styled';
import useContainer from './hook';

const PaginationProgressBar = ({ isLoading }) => {
  const theme = useContainer();

  if (!isLoading) {
    return null;
  }

  return (
    <S.Wrap>
      <ActivityIndicator color={theme.colors.blue100} />
    </S.Wrap>
  );
};

PaginationProgressBar.propTypes = {
  isLoading: PropTypes.bool,
};

PaginationProgressBar.defaultProps = {
  isLoading: false,
};

export default PaginationProgressBar;
