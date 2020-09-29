import React from 'react';
import { shallow } from 'enzyme';

import InitialScreen from '../component';

jest.mock('../hook');

describe('InitialScreen component', () => {
  const component = shallow(<InitialScreen />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
