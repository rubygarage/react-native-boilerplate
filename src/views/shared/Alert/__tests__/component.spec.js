import React from 'react';
import { shallow } from 'enzyme';

import theme from 'utils/testHelpers/mockedTheme';
import testIntl from 'utils/testHelpers/testIntl';
import Alert from '../component';

const defaultProps = {
  title: { id: 'title_id' },
  subtitle: { id: 'subtitle_id' },
  message: { id: 'message_id' },
  iconName: 'info',
  contentColor: 'black',
  backgroundColor: 'white',
  intl: testIntl,
  theme,
};

describe('Alert component', () => {
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
});
