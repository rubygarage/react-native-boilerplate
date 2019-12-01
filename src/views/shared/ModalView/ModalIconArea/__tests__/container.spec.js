import React from 'react';

import shallowWithTheme from 'utils/testHelpers/shallowWithTheme';
import diveTo from 'utils/testHelpers/diveToEnzyme';
import ModalIconArea from '../container';
import ModalIconAreaComponent from '../component';

const defaultProps = { iconName: 'close', textId: 'text_id' };

describe('ModalIconArea container', () => {
  it('renders correctly default', () => {
    const wrapper = shallowWithTheme(<ModalIconArea {...defaultProps} />);
    const container = diveTo(wrapper, ModalIconAreaComponent);
    expect(container).toMatchSnapshot();
  });
});
