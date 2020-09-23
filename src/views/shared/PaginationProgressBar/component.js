import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import * as S from './styled';

const PaginationProgressBar = ({ isLoading }) => {
  const theme = useContext(ThemeContext);

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
