import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const ModalFooter = ({ children }) => (
  <S.Wrap>
    {children}
  </S.Wrap>
);

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalFooter;
