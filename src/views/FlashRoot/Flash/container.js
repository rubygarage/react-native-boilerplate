import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { hideFlash as hideFlashAction } from 'state/flash/actions';
import Alert from 'views/shared/Alert';

class Flash extends Component {
  componentDidMount() {
    const { lifetime } = this.props;
    if (lifetime) {
      this.timerHandle = setInterval(this.onHideFlash, lifetime);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerHandle);
  }

  onHideFlash = () => {
    const { hideFlash, id, doAnimation } = this.props;
    hideFlash(id);
    doAnimation();
  }

  onActionClick = () => {
    const { dispatch, hideFlash, id, flashProps: { action } } = this.props;
    hideFlash(id);
    dispatch(action);
  }

  render() {
    const { flashProps } = this.props;
    const { isCloseable } = flashProps;
    return (
      <Alert
        {...flashProps}
        onCloseClick={isCloseable ? this.onHideFlash : undefined}
        onActionClick={this.onActionClick}
      />
    );
  }
}

Flash.propTypes = {
  hideFlash: PropTypes.func.isRequired,
  doAnimation: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  flashProps: PropTypes.shape({
    action: PropTypes.shape({}),
    isCloseable: PropTypes.bool,
  }).isRequired,
  lifetime: PropTypes.number,
};

Flash.defaultProps = {
  lifetime: undefined,
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ hideFlash: hideFlashAction }, dispatch),
  dispatch,
});

export { Flash as FlashContainer };
export default connect(null, mapDispatchToProps)(Flash);
