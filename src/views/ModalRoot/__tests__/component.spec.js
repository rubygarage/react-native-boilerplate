import React from 'react';
import { shallow } from 'enzyme';

import ModalRoot from '../component';
import * as useContainer from '../hook';

jest.mock('../modalComponents', () => ({ MY_MODAL: { key: 'MY_MODAL', modal: jest.fn() } }));

jest.mock('../hook', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    modalType: 'MY_MODAL',
    modalProps: { customProp: 'customProp' },
    isVisible: true,
    onCloseModal: jest.fn(),
    onDestroyModal: jest.fn(),
  })),
}));

describe('ModalRoot component', () => {
  it('renders ModalRoot when modalType is present', () => {
    const component = shallow(<ModalRoot />);

    expect(component).toMatchSnapshot();
  });

  it('return null unless modalType present', () => {
    useContainer.default.mockImplementation(() => ({
      modalType: null,
      modalProps: {},
      isVisible: true,
      onCloseModal: jest.fn(),
      onDestroyModal: jest.fn(),
    }));

    const component = shallow(<ModalRoot />);

    expect(component).toMatchSnapshot();
  });
});
