import React from 'react';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';

class InitialScreen extends React.Component {
  componentDidMount() {
    const { navigation: { navigate } } = this.props;
    SplashScreen.hide();
    navigate('App');
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
