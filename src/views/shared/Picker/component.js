import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'views/shared/Icon';
import SimplePicker from './SimplePicker';
import * as S from './styled';

const PickerComponent = (props) => {
  const { onPickerToggle, isOpen, label, theme } = props;
  return (isOpen
    ? <SimplePicker {...props} />
    : (
      <TouchableOpacity onPress={onPickerToggle}>
        <S.PickerValueWrap>
          <S.PickerValue>
            {label}
          </S.PickerValue>
          <Icon name="down-arrow" size={20} color={theme.colors.grey500} />
        </S.PickerValueWrap>
      </TouchableOpacity>
    ));
};

PickerComponent.propTypes = {
  onPickerToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  theme: PropTypes.shape({ colors: PropTypes.shape().isRequired }).isRequired,
};

export default PickerComponent;
