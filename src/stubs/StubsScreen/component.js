import React from 'react';
import PropTypes from 'prop-types';
import { Button, ScrollView } from 'react-native';

import stubs from '../stubs';

const StubsScreen = ({ navigation: { navigate } }) => (
  <ScrollView>
    {Object.keys(stubs).map((key) => (
      <Button
        key={key}
        title={key}
        onPress={() => {
          navigate(key);
        }}
      />
    ), stubs)}
  </ScrollView>
);

StubsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

StubsScreen.navigationOptions = () => ({
  headerTitle: 'Stubs',
});

export default StubsScreen;
