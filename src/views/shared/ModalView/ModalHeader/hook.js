import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const useContainer = () => {
  const theme = useContext(ThemeContext);

  return {
    theme,
  };
};

export default useContainer;
