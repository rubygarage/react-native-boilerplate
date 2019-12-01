import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components/native';
import PropTypes from 'prop-types';

import ConfirmModalComponent from './component';

class ConfirmModal extends Component {
  state = { isShouldConfirm: false }

  handleShouldConfirm = () => {
    const { onCloseModal } = this.props;
    this.setState({ isShouldConfirm: true });
    onCloseModal();
  }

  onModalHide = () => {
    const { onDestroyModal, dispatch, confirmAction } = this.props;
    const { isShouldConfirm } = this.state;
    if (isShouldConfirm) {
      dispatch(confirmAction);
    }
    onDestroyModal();
  }

  render() {
    return (
      <ConfirmModalComponent
        {...this.props}
        onShouldConfirm={this.handleShouldConfirm}
        onModalHide={this.onModalHide}
      />
    );
  }
}

ConfirmModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  onDestroyModal: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  confirmAction: PropTypes.shape().isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const enhance = compose(
  connect(null, mapDispatchToProps),
  withTheme,
);

export { ConfirmModal as ConfirmModalContainer };
export default enhance(ConfirmModal);
