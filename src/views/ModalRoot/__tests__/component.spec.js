import React from 'react';
import { shallow } from 'enzyme';
import { useSelector } from 'react-redux';

import ModalRoot from '../component';

jest.mock('../modalComponents', () => ({ MY_MODAL: { key: 'MY_MODAL', modal: jest.fn() } }));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(() => 'MY_MODAL'),
}));

describe('ModalRoot component', () => {
  it('renders ModalRoot when modalType is present', () => {
    const component = shallow(<ModalRoot />);

    expect(component).toMatchSnapshot();
  });

  it('return null unless modalType present', () => {
    useSelector.mockImplementation(jest.fn(() => null));

    const component = shallow(<ModalRoot />);

    expect(component).toMatchSnapshot();
  });
});
