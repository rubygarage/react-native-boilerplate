import React from 'react';
import { shallow } from 'enzyme';
import SplashScreen from 'react-native-splash-screen';

import InitialScreen from '../container';

jest.mock('react-native-splash-screen', () => ({
  hide: jest.fn(),
}));

describe('InitialScreen container', () => {
  const navigate = jest.fn();
  const navigation = { navigate };
  const defaultProps = { navigation };

  const options = { disableLifecycleMethods: true };
  const defaultContainer = shallow(<InitialScreen {...defaultProps} />, options);
  const defaultInstance = defaultContainer.instance();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    expect(defaultContainer).toMatchSnapshot();
  });

  it('componentDidMount navigates to the App screen stack', () => {
    defaultInstance.componentDidMount();

    expect(SplashScreen.hide).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith('Home');
  });
});
