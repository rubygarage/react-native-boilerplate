import React from 'react';
import styled from 'styled-components/native';
import colors from '../../assets/theme/colors';

const SplashScreen = () => (
  <SplashScreen.Container>
    <SplashScreen.LogoText>GO</SplashScreen.LogoText>
  </SplashScreen.Container>
);

SplashScreen.Container = styled.View`
  flex-grow: 1;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

SplashScreen.LogoText = styled.Text`
  font-size: 72px;
  line-height: 96px;
  color: ${colors.black};
  font-weight: bold;
`;

SplashScreen.navigationOptions = () => ({
  headerTitle: 'SplashScreen',
});

export default SplashScreen;
