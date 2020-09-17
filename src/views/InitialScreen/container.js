import React from 'react';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';
import Config from 'react-native-config';

class InitialScreen extends React.Component {
  componentDidMount() {
    const { navigation: { navigate } } = this.props;
    SplashScreen.hide();
    console.log(Config);
    navigate('Home');
  }

  render() {
    return null;
  }
}

InitialScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default InitialScreen;
