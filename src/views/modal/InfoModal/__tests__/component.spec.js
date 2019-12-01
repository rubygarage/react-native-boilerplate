import React from 'react';
import { shallow } from 'enzyme';

import InfoModal from '../component';

describe('InfoModal component', () => {
  const defaultProps = {
    isVisible: true,
    onCloseModal: jest.fn(),
    onDestroyModal: jest.fn(),
    title: 'test title',
    detail: 'test detail',
  };

  const component = shallow(<InfoModal {...defaultProps} />);

  it('renders correctly default', () => {
    expect(component).toMatchSnapshot();
  });
});
