import React from 'react';
import { shallow } from 'enzyme';

import { ALERT_TYPES } from 'constants/alert';
import FlashRoot from '../component';

describe('FlashRoot component', () => {
  const flash = { id: 0, type: ALERT_TYPES.info, title: 'test_title', message: 'test_message' };
  const defaultProps = {
    flashes: [flash],
    doAnimation: jest.fn(),
  };
  const component = shallow(<FlashRoot {...defaultProps} />);

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
