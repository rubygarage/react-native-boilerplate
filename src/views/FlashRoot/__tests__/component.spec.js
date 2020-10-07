import React from 'react';
import { shallow } from 'enzyme';

import { ALERT_TYPES } from 'constants/alert';
import FlashRoot from '../component';

const mockedFashes = [
  { id: '1', flashProps: {} },
  { id: '2', flashProps: {} },
];

jest.mock('../hook', () => ({
  __esModule: true,
  default: () => ({
    flashes: mockedFashes,
    doAnimation: jest.fn(),
  }),
}));

describe('FlashRoot component', () => {
  const flash = { id: '0', type: ALERT_TYPES.info, title: 'test_title', message: 'test_message' };
  let component = null;

  beforeEach(() => {
    component = shallow(<FlashRoot />);
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
});
