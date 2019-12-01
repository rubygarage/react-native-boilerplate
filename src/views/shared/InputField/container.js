import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { call, path, pathOr } from 'ramda';
import { injectIntl } from 'react-intl';
import { withTheme } from 'styled-components/native';

import InputFieldComponent from './component';

class InputField extends Component {
  state = {
    isFocused: false,
    actionWidth: 0,
  }

  onActionRendered = (event) => {
    const { width } = event.nativeEvent.layout;
    this.setState({ actionWidth: width });
  }

  onFocus = () => {
    this.setState({ isFocused: true });
  }

  onBlur = (event) => {
    const { field: { name }, form: { handleBlur } } = this.props;
    call(handleBlur(name), event);
    this.setState({ isFocused: false });
  }

  getErrorData = () => {
    const { field: { name }, form: { errors } } = this.props;
    const errorId = path([name, 'id'], errors);
    const errorValues = path([name, 'values'], errors);
    const errorIcon = pathOr('alert', [name, 'icon'], errors);
    return { errorId, errorValues, errorIcon };
  }

  render() {
    const { actionWidth, isFocused } = this.state;
    return (
      <InputFieldComponent
        {...this.props}
        onActionRendered={this.onActionRendered}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        actionWidth={actionWidth}
        isFocused={isFocused}
        {...this.getErrorData()}
      />
    );
  }
}

InputField.propTypes = {
  field: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.shape().isRequired,
    handleBlur: PropTypes.func.isRequired,
  }).isRequired,
  theme: PropTypes.shape({ colors: PropTypes.shape.isRequired }).isRequired,
};

const enhance = compose(
  injectIntl,
  withTheme,
);

export { InputField as InputFieldContainer };
export default enhance(InputField);
