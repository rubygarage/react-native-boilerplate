import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';

const HomeScreenComponent = ({
  navigation: { navigate },
}) => (
  <View>
    <Text>Home Screen</Text>
    <Button
      title="Stubs"
      onPress={() => navigate('Stubs')}
      testID="stubs-button"
    />
  </View>
);

HomeScreenComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreenComponent;
