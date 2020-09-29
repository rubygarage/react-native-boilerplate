import { act, renderHook } from '@testing-library/react-hooks';
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
  const { result } = renderHook(() => useContainer());

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('checks didMount method', () => {
    act(() => {
      result.current.didMount();
    });

    expect(mockedNavigate).toHaveBeenCalledWith('Home');
    expect(SplashScreen.hide).toHaveBeenCalled();
  });
});
