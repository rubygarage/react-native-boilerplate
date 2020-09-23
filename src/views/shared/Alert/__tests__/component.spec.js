import * as React from 'react';
import { shallow } from 'enzyme';

import { ALERT_TYPES } from 'constants/alert';
import theme from 'utils/testHelpers/mockedTheme';
import testIntl from 'utils/testHelpers/testIntl';
import HooksTestHelper from 'utils/testHelpers/hooksTestHelper';

import Alert, { getStyleProps } from '../component';

const defaultProps = {
  title: { id: 'title_id' },
  subtitle: { id: 'subtitle_id' },
  message: { id: 'message_id' },
  intl: testIntl,
  type: 'info',
};

describe('Alert component', () => {
  HooksTestHelper.mockUseContextImplementation(() => theme);

  const component = shallow(<Alert {...defaultProps} />);

  it('renders correctly default', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correctly with string data', () => {
    const props = {
      ...defaultProps,
      title: 'test title',
      subtitle: 'test title',
      message: 'test message',
    };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly without subtitle', () => {
    const props = {
      ...defaultProps,
      subtitle: undefined,
    };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly closable', () => {
    const props = {
      ...defaultProps,
      onCloseClick: jest.fn(),
    };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly with action button', () => {
    const props = {
      ...defaultProps,
      onActionClick: jest.fn(),
      actionIconName: 'video',
      actionTextId: 'testActionTextId',
    };
    component.setProps(props);
    expect(component).toMatchSnapshot();
  });

  describe('getStyleProps', () => {
    it('returns info style props', () => {
      expect(getStyleProps(ALERT_TYPES.info, theme)).toEqual({
        contentColor: theme.colors.blue500,
        backgroundColor: theme.colors.blue50,
        iconName: 'info',
      });
    });

    it('returns error style props', () => {
      expect(getStyleProps(ALERT_TYPES.error, theme)).toEqual({
        contentColor: theme.colors.red500,
        backgroundColor: theme.colors.red50,
        iconName: 'close',
      });
    });

    it('returns success style props', () => {
      expect(getStyleProps(ALERT_TYPES.success, theme)).toEqual({
        contentColor: theme.colors.green500,
        backgroundColor: theme.colors.green50,
        iconName: 'tick',
      });
    });
  });
});
