import React from 'react';
import PropTypes from 'prop-types';

import Alert from 'views/shared/Alert';

import useFlashMethods from './hooks/useFlashMethods';

const Flash = (props) => {
  const { flashProps } = props;

  const { onHideFlash, onActionClick } = useFlashMethods(props);

  return (
    <Alert
      {...flashProps}
      onCloseClick={flashProps.isCloseable ? onHideFlash : undefined}
      onActionClick={onActionClick}
    />
  );
};

Flash.propTypes = {
  doAnimation: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  flashProps: PropTypes.shape({
    action: PropTypes.shape({}),
    isCloseable: PropTypes.bool,
  }),
  lifetime: PropTypes.number,
};

Flash.defaultProps = {
  lifetime: undefined,
  flashProps: {},
};

export default Flash;
