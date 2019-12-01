import React from 'react';

import theme from 'utils/testHelpers/mockedTheme';
import shallowWithTheme from 'utils/testHelpers/shallowWithTheme';
import diveTo from 'utils/testHelpers/diveToEnzyme';
import { ALERT_TYPES } from 'constants/alert';
import Alert, { AlertContainer } from '../container';

const defaultProps = { type: ALERT_TYPES.info, title: { id: 'title-id' }, message: { id: 'message-id' } };

describe('Alert container', () => {
  const wrapper = shallowWithTheme(<Alert {...defaultProps} />);
  const container = diveTo(wrapper, AlertContainer);

  it('renders correctly default', () => {
    expect(container).toMatchSnapshot();
  });

  describe('getStyleProps', () => {
    it('returns info style props', () => {
      const instance = container.instance();
      expect(instance.getStyleProps()).toEqual({
        contentColor: theme.colors.blue500,
        backgroundColor: theme.colors.blue50,
        iconName: 'info',
      });
    });

    it('returns error style props', () => {
      container.setProps({ ...defaultProps, type: ALERT_TYPES.error });
      const instance = container.instance();
      expect(instance.getStyleProps()).toEqual({
        contentColor: theme.colors.red500,
        backgroundColor: theme.colors.red50,
        iconName: 'close',
      });
    });

    it('returns success style props', () => {
      container.setProps({ ...defaultProps, type: ALERT_TYPES.success });
      const instance = container.instance();
      expect(instance.getStyleProps()).toEqual({
        contentColor: theme.colors.green500,
        backgroundColor: theme.colors.green50,
        iconName: 'tick',
      });
    });
  });
});
