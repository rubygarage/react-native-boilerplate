import React from 'react';
import { shallow } from 'enzyme';

import AppNavigator from '../AppNavigator';

describe('AppNavigator component', () => {
  it('renders correctly', () => {
    const component = shallow(<AppNavigator />);

    expect(component).toMatchSnapshot();
  });
});
