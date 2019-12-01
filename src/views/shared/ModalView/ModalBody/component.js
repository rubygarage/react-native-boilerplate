import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const ModalBody = ({ children }) => (
  <S.Wrap>
    {children}
  </S.Wrap>
);

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalBody;
