import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { UIManager } from 'react-native';

import diveTo from 'utils/testHelpers/diveToEnzyme';
import { ALERT_TYPES } from 'constants/alert';
import FlashRoot, { FlashRootContainer } from '../container';

jest.mock('react-native/Libraries/ReactNative/UIManager', () => ({
  getViewManagerConfig: jest.fn(),
}));

jest.mock('react-native/Libraries/LayoutAnimation/LayoutAnimation', () => ({
  ...jest.requireActual(
    'react-native/Libraries/LayoutAnimation/LayoutAnimation',
  ),
  configureNext: jest.fn(),
}));

jest.mock('state/flash/selectors', () => ({
  flashesSelector: jest.fn(() => []),
}));

describe('FlashRoot container', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();
  const defaultProps = { store };
  const wrapper = shallow(<FlashRoot {...defaultProps} />);
  const container = diveTo(wrapper, FlashRootContainer);
  const instance = container.instance();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });

  it('componentDidMount', () => {
    const mockSetLayoutAnimationEnabledExperimental = jest.fn();
    UIManager.setLayoutAnimationEnabledExperimental = mockSetLayoutAnimationEnabledExperimental;
    instance.componentDidMount();
    expect(mockSetLayoutAnimationEnabledExperimental).toHaveBeenCalledWith(true);
  });

  it('componentDidUpdate calls "doAnimation"', () => {
    const doAnimationSpy = jest.spyOn(instance, 'doAnimation');
    container.setProps({ flashes: [{ id: 0, type: ALERT_TYPES.info }] });
    instance.componentDidUpdate({ flashes: [] });

    expect(doAnimationSpy).toHaveBeenCalled();
  });

  it('componentDidUpdate does not call "doAnimation"', () => {
    const doAnimationSpy = jest.spyOn(instance, 'doAnimation');
    container.setProps({ flashes: [] });
    doAnimationSpy.mockClear();
    instance.componentDidUpdate({ flashes: [] });

    expect(doAnimationSpy).not.toHaveBeenCalled();
  });
});
