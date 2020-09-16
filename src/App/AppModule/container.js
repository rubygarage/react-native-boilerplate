import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppState } from 'react-native';
import { connect } from 'react-redux';

import theme from 'constants/theme';
import {
  startListenConnectionState as startListenConnectionStateAction,
  stopListenConnectionState as stopListenConnectionStateAction,
} from 'state/concepts/application/actions';
import AppModuleComponent from './component';

class AppModule extends Component {
  componentDidMount() {
    const { startListenConnectionState } = this.props;
    startListenConnectionState();
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (nextAppState) => {
    const { startListenConnectionState, stopListenConnectionState } = this.props;
    if (nextAppState === 'active') {
      startListenConnectionState();
    } else {
      stopListenConnectionState();
    }
  };

  render() {
    return (<AppModuleComponent theme={theme} />);
  }
}

AppModule.propTypes = {
  startListenConnectionState: PropTypes.func.isRequired,
  stopListenConnectionState: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  startListenConnectionState: startListenConnectionStateAction,
  stopListenConnectionState: stopListenConnectionStateAction,
};

export { AppModule as AppModuleContainer };
export default connect(null, mapDispatchToProps)(AppModule);
