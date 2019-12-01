import React from 'react';
import { shallow } from 'enzyme';

import theme from 'utils/testHelpers/mockedTheme';
import ModalIconArea from '../component';

describe('ModalIconArea component', () => {
  const defaultProps = {
    iconName: 'close',
    textId: 'text_id',
    theme,
  };
  const component = shallow(<ModalIconArea {...defaultProps} />);

  it('renders correctly default', () => {
    expect(component).toMatchSnapshot();
  });
});
