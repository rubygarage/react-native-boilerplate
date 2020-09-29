import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';

const useContainer = () => {
  const navigation = useNavigation();

  /**
   * Mounting
   */
  const didMount = () => {
    SplashScreen.hide();
    navigation.navigate('Home');
  };

  useEffect(didMount, []);

  return {
    navigation,
    didMount,
  };
};

export default useContainer;
