import React, { Component } from 'react';
import { withTheme } from 'styled-components/native';
import PropTypes from 'prop-types';

import { ALERT_TYPES } from 'constants/alert';
import AlertComponent from './component';

class Alert extends Component {
  getStyleProps = () => {
    const { type, theme } = this.props;
    switch (type) {
      case ALERT_TYPES.error:
        return { iconName: 'close', contentColor: theme.colors.red500, backgroundColor: theme.colors.red50 };
      case ALERT_TYPES.success:
        return { iconName: 'tick', contentColor: theme.colors.green500, backgroundColor: theme.colors.green50 };
      default:
        return { iconName: 'info', contentColor: theme.colors.blue500, backgroundColor: theme.colors.blue50 };
    }
  }

  render() {
    const styleProps = this.getStyleProps();
    return (
      <AlertComponent
        {...this.props}
        {...styleProps}
      />
    );
  }
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  theme: PropTypes.shape({ colors: PropTypes.shape().isRequired }).isRequired,
};

export { Alert as AlertContainer };
export default withTheme(Alert);
