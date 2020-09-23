import React from 'react';
import { shallow } from 'enzyme';
import { useSelector } from 'react-redux';
import { UIManager } from 'react-native';

import { ALERT_TYPES } from 'constants/alert';
import FlashRoot from '../component';
import * as doAnimationHook from '../hooks/doAnimationHook';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');

  RN.UIManager.setLayoutAnimationEnabledExperimental = jest.fn();
  RN.LayoutAnimation.configureNext = jest.fn();

  return RN;
});

const flashes = [
  { id: '1', flashProps: {} },
  { id: '2', flashProps: {} },
];

describe('FlashRoot component', () => {
  const flash = { id: '0', type: ALERT_TYPES.info, title: 'test_title', message: 'test_message' };
  const defaultProps = {
    flashes: [flash],
    doAnimation: jest.fn(),
    flashProps: {},
  };
  let component = null;
  const doAnimation = jest.fn();

  doAnimationHook.default = () => ({
    doAnimation,
  });

  beforeEach(() => {
    useSelector.mockImplementation(() => flashes);

    component = shallow(<FlashRoot {...defaultProps} />);
  });

  it('renders correctly by default', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correct item', () => {
    const flatList = component.find('Styled(FlatList)');

    const item = flatList.renderProp('renderItem')({ item: flash });
    expect(item).toMatchSnapshot();
  });

  it('returns correct key', () => {
    const sectionList = component.find('Styled(FlatList)');

    const key = sectionList.prop('keyExtractor')(flash);
    expect(key).toEqual(flash.id);
  });

  describe('Lifecycle', () => {
    it('useEffect - mounting, should call setLayoutAnimationEnabledExperimental', () => {
      shallow(<FlashRoot {...defaultProps} />);

      expect(UIManager.setLayoutAnimationEnabledExperimental).toHaveBeenCalledWith(true);
    });

    it('useEffect - mounting, should not call setLayoutAnimationEnabledExperimental', () => {
      UIManager.setLayoutAnimationEnabledExperimental = null;

      shallow(<FlashRoot {...defaultProps} />);

      expect(UIManager.setLayoutAnimationEnabledExperimental).toBeFalsy();
    });

    it('useEffect - updating', () => {
      useSelector.mockImplementation(() => [...flashes, { id: '3' }]);

      // Force update. It is only way to update component with useEffect calling.
      component.setProps();

      expect(doAnimation).toHaveBeenCalled();
    });
  });
});
