import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';

import { POPOVER_PLACEMENT } from 'constants/ui';
import theme from 'utils/testHelpers/mockedTheme';
import Popover from '../component';

describe('Popover component', () => {
  const defaultProps = {
    isVisible: true,
    fromView: {},
    placement: POPOVER_PLACEMENT.auto,
    onRequestClose: jest.fn(),
    theme,
  };
  const component = shallow(<Popover {...defaultProps}><View /></Popover>);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
