import React from 'react';
import { shallow } from 'enzyme';
import SplashScreen from 'react-native-splash-screen';

import InitialScreen from '../component';

jest.mock('react-native-splash-screen', () => ({
  hide: jest.fn(),
}));

describe('InitialScreen component', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  let component = null;

  beforeEach(() => {
    component = shallow(<InitialScreen {...props} />);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('useEffect mounting', () => {
    expect(SplashScreen.hide).toHaveBeenCalled();
    expect(props.navigation.navigate).toHaveBeenCalledWith('Home');
  });
});
