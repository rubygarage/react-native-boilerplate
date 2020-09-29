import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';

const useContainer = () => {
  const navigation = useNavigation();

  useEffect(() => {
    SplashScreen.hide();
    navigation.navigate('Home');
  }, []);

  return {
    navigation,
  };
};

export default useContainer;
