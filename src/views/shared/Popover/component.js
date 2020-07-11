import React from 'react';
import PropTypes from 'prop-types';
import { keys } from 'ramda';

import { POPOVER_PLACEMENT } from 'constants/ui';
import * as S from './styled';

const Popover = ({
  children, isVisible, from, placement, onRequestClose,
}) => (
  <S.Popover
    isVisible={isVisible}
    from={from}
    placement={placement}
    mode="rn-modal"
    onRequestClose={onRequestClose}
  >
    {children}
  </S.Popover>
);

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  placement: PropTypes.oneOf(keys(POPOVER_PLACEMENT)).isRequired,
  onRequestClose: PropTypes.func.isRequired,
  from: PropTypes.shape(),
};

Popover.defaultProps = {
  from: undefined,
};

export default Popover;
