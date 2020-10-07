import { useState } from 'react';
import * as R from 'ramda';
import { useIntl } from 'react-intl';

import useTheme from 'lib/hooks/useTheme';

const useContainer = (props) => {
  const {
    selectedValue,
    options,
    intl: { formatMessage },
    onValueChange,
  } = props;

  const theme = useTheme();
  const intl = useIntl();

  const [isOpen, setIsOpen] = useState(false);

  const detectLabel = () => {
    const option = R.find(R.propEq('value', selectedValue))(options);

    return R.prop('label', option) || formatMessage({ id: 'shared.na' });
  };

  const handlePickerToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleValueChange = (value) => {
    onValueChange(value);

    handlePickerToggle();
  };

  return {
    theme,
    intl,
    isOpen,
    setIsOpen,
    detectLabel,
    handlePickerToggle,
    handleValueChange,
  };
};

export default useContainer;
