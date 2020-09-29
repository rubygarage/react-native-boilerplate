import { renderHook } from '@testing-library/react-hooks';
import SplashScreen from 'react-native-splash-screen';

import useContainer from '../hook';

jest.mock('react-native-splash-screen', () => ({
  hide: jest.fn(),
}));

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
}));

describe('InitialScreen useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('checks mounting', () => {
    expect(mockedNavigate).toHaveBeenCalledWith('Home');
    expect(SplashScreen.hide).toHaveBeenCalled();
  });
});
