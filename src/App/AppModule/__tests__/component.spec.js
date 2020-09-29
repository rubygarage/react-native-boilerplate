import React from 'react';
import { shallow } from 'enzyme';

import AppModule from '../component';

jest.mock('../hook');

describe('AppModule component', () => {
  const component = shallow(<AppModule />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
