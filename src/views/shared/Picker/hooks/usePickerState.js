import { useState } from 'react';
import * as R from 'ramda';

const usePickerState = (props) => {
  const {
    selectedValue,
    options,
    intl: { formatMessage },
    onValueChange,
  } = props;

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
    isOpen,
    setIsOpen,
    detectLabel,
    handlePickerToggle,
    handleValueChange,
  };
};

export default usePickerState;
