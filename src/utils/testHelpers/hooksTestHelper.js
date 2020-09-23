import * as React from 'react';
import * as reactRedux from 'react-redux';

class MockReactHooks {
  /**
   * Mock useContext.
   */
  static mockUseContextImplementation = (implementation) => {
    this.useContext = React.useContext;

    const mock = jest.fn();

    React.useContext = mock;

    mock.mockImplementation(implementation);
  }

  /**
   * UnMock useContext.
   */
  static unMockUseContext = () => {
    React.useContext = this.useContext;
    this.useContext = null;
  }

  /**
   * Mock useDispatch.
   */
  static mockUseDispatchImplementation = (implementation) => {
    this.useDispatch = reactRedux.useDispatch;

    const mock = jest.fn();

    reactRedux.useDispatch = mock;

    mock.mockImplementation(implementation);
  }

  /**
   * UnMock useDispatch.
   */
  static unMockUseDispatch = () => {
    reactRedux.useDispatch = this.useDispatch;
    this.useDispatch = null;
  }
}

MockReactHooks.useContext = null;
MockReactHooks.useIntl = null;
MockReactHooks.useDispatch = null;

export default MockReactHooks;
