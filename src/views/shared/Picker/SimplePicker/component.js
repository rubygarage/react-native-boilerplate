import React from 'react';
import { Picker } from '@react-native-community/picker';
import PropTypes from 'prop-types';

import * as S from '../styled';

const SimplePicker = ({ onValueChange, selectedValue, options }) => (
  <S.PickerView
    onValueChange={onValueChange}
    selectedValue={selectedValue}
  >
    {options.map((item) => <Picker.Item {...item} />)}
  </S.PickerView>
);

SimplePicker.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  selectedValue: PropTypes.string,
};

SimplePicker.defaultProps = {
  selectedValue: undefined,
};

export default SimplePicker;
