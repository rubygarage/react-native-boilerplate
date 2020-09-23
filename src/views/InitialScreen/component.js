import { useEffect } from 'react';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';

const InitialScreen = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hide();
    navigation.navigate('Home');

    // eslint-disable-next-line
  }, []);

  return null;
};

InitialScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default InitialScreen;
