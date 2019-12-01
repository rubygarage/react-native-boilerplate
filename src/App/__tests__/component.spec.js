import React from 'react';
import { shallow } from 'enzyme';

import App from '../component';

jest.useFakeTimers();

describe('App component', () => {
  const component = shallow(<App />);
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
