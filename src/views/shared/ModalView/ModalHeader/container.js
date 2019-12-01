import React from 'react';
import { withTheme } from 'styled-components/native';

import ModalHeaderComponent from './component';

const ModalHeader = (props) => (
  <ModalHeaderComponent {...props} />
);

export { ModalHeader as ModalHeaderContainer };
export default withTheme(ModalHeader);
