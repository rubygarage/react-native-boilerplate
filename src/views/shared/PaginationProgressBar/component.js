import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import * as S from './styled';

const PaginationProgressBar = ({ isLoading, theme }) => isLoading && (
  <S.Wrap>
    <ActivityIndicator color={theme.colors.blue100} />
  </S.Wrap>
);

PaginationProgressBar.propTypes = {
  theme: PropTypes.shape({ colors: PropTypes.shape().isRequired }).isRequired,
  isLoading: PropTypes.bool,
};

PaginationProgressBar.defaultProps = {
  isLoading: false,
};

export default PaginationProgressBar;
