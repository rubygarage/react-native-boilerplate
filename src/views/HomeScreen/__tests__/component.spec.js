import React from 'react';
import { shallow } from 'enzyme';

import HomeScreen from '../component';

describe('HomeScreen component', () => {
  const navigation = { navigate: jest.fn() };
  const defaultProps = { navigation };
  const component = shallow(<HomeScreen {...defaultProps} />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('navigates to the Stubs page', () => {
    component.findWhere((node) => node.prop('testID') === 'stubs-button').simulate('press');
    expect(navigation.navigate).toHaveBeenCalledWith('Stubs');
  });
});
