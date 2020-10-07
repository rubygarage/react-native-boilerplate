import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'views/shared/Icon';

import SimplePicker from './SimplePicker';
import * as S from './styled';
import useContainer from './hook';

const PickerComponent = (props) => {
  const { onPickerToggle, isOpen, label } = props;

  const { theme, intl } = useContainer(props);

  if (isOpen) {
    return <SimplePicker {...props} theme={theme} intl={intl} />;
  }

  return (
    <TouchableOpacity onPress={onPickerToggle}>
      <S.PickerValueWrap>
        <S.PickerValue>
          {label}
        </S.PickerValue>
        <Icon name="down-arrow" size={20} color={theme.colors.grey500} />
      </S.PickerValueWrap>
    </TouchableOpacity>
  );
};

PickerComponent.propTypes = {
  onPickerToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default PickerComponent;
