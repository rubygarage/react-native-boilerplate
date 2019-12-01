import React, { Component } from 'react';
import { find, propEq, prop } from 'ramda';
import { withTheme } from 'styled-components/native';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import PickerComponent from './component';

class Picker extends Component {
  state = { isOpen: false }

  get label() {
    const { selectedValue, options, intl: { formatMessage } } = this.props;
    const option = find(propEq('value', selectedValue))(options);
    return prop('label', option) || formatMessage({ id: 'shared.na' });
  }

  handlePickerToggle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  handleValueChange = (value) => {
    const { onValueChange } = this.props;
    onValueChange(value);
    this.handlePickerToggle();
  }

  render() {
    return (
      <PickerComponent
        {...this.props}
        {...this.state}
        label={this.label}
        onPickerToggle={this.handlePickerToggle}
        onValueChange={this.handleValueChange}
      />
    );
  }
}

Picker.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  selectedValue: PropTypes.string,
};

Picker.defaultProps = {
  selectedValue: undefined,
};

const enhance = compose(
  withTheme,
  injectIntl,
);

export { Picker as PickerContainer };
export default enhance(Picker);
