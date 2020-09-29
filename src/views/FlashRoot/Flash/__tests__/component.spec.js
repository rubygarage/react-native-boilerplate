import React from 'react';
import { shallow } from 'enzyme';

import Flash from '../component';

jest.useFakeTimers();

jest.mock('../hook', () => ({
  __esModule: true,
  default: () => ({
    onHideFlash: jest.fn(),
    onActionClick: jest.fn(),
  }),
}));

describe('Flash component', () => {
  const props = {
    doAnimation: jest.fn(),
    id: 'test_id',
    flashProps: {
      action: { type: 'TEST' },
      isCloseable: true,
      title: 'Some',
      type: 'info',
    },
    lifetime: null,
  };

  const component = shallow(<Flash {...props} />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correctly when isCloseable equals false', () => {
    component.setProps({
      ...props,
      flashProps: {
        ...props.flashProps,
        isCloseable: false,
      },
    });

    expect(component).toMatchSnapshot();
  });
});
