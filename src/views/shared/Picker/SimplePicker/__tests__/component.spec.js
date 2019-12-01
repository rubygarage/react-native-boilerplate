import React from 'react';
import { shallow } from 'enzyme';

import SimplePicker from '../component';

describe('SimplePicker component', () => {
  const defaultProps = {
    onValueChange: jest.fn(),
    selectedValue: 'value1',
    options: [
      { key: 'key0', label: 'label0', value: 'value0' },
      { key: 'key1', label: 'label1', value: 'value1' }],
  };
  const component = shallow(<SimplePicker {...defaultProps} />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
