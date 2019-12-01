import React from 'react';
import { shallow } from 'enzyme';

import IcoMoonIcon from '../component';

const component = shallow(<IcoMoonIcon name="info" />);

describe('IcoMoonIcon component', () => {
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
