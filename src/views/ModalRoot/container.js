import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from 'state/modal/actions';
import ModalRootComponent from './component';

class ModalRoot extends Component {
  state = { isVisible: true }

  onCloseModal = () => {
    this.setState({ isVisible: false });
  }

  onDestroyModal = () => {
    const { destroyModal } = this.props;
    destroyModal();
    this.setState({ isVisible: true });
  }

  render() {
    const { isVisible } = this.state;
    return (
      <ModalRootComponent
        {...this.props}
        onCloseModal={this.onCloseModal}
        onDestroyModal={this.onDestroyModal}
        isVisible={isVisible}
      />
    );
  }
}

ModalRoot.propTypes = {
  destroyModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  modalType: state.modal.modalType,
  modalProps: state.modal.modalProps,
});

const mapDispatchToProps = {
  destroyModal: hideModal,
};

export { ModalRoot as ModalRootContainer };
export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);
