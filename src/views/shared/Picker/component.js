import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { useIntl } from 'react-intl';

import Icon from 'views/shared/Icon';

import usePickerState from './hooks/usePickerState';
import SimplePicker from './SimplePicker';
import * as S from './styled';

const PickerComponent = (props) => {
  const { onPickerToggle, isOpen, label } = props;

  const theme = useContext(ThemeContext);
  const intl = useIntl();

  const extendedProps = {
    ...props,
    theme,
    intl,
  };

  usePickerState(extendedProps);

  if (isOpen) {
    return <SimplePicker {...extendedProps} />;
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
