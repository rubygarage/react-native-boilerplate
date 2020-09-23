import React from 'react';
import { shallow } from 'enzyme';

import HooksTestHelper from 'utils/testHelpers/hooksTestHelper';

import Flash from '../component';
import * as useFlashMethods from '../hooks/useFlashMethods';

jest.useFakeTimers();

HooksTestHelper.mockUseDispatchImplementation(() => jest.fn());

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

  const onHideFlash = jest.fn();
  const onActionClick = jest.fn();

  useFlashMethods.default = () => ({
    onHideFlash,
    onActionClick,
  });

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
