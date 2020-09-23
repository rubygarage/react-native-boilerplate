import * as React from 'react';
import * as reactRedux from 'react-redux';

import HooksTestHelper from '../hooksTestHelper';

describe('Hooks test helper', () => {
  const realUseContext = React.useContext;
  const testUseContext = jest.fn();

  const realUseDispatch = reactRedux.useDispatch;
  const testUseDispatch = jest.fn();

  it('checks mockUseContextImplementation method', () => {
    HooksTestHelper.mockUseContextImplementation(() => testUseContext);

    expect(React.useContext()).toEqual(testUseContext);
    expect(HooksTestHelper.useContext).toEqual(realUseContext);
  });

  it('checks unMockUseContext method', () => {
    HooksTestHelper.unMockUseContext();

    expect(React.useContext).toEqual(realUseContext);
    expect(HooksTestHelper.useContext).toBe(null);
  });

  it('checks mockUseDispatchImplementation method', () => {
    HooksTestHelper.mockUseDispatchImplementation(() => testUseDispatch);

    expect(reactRedux.useDispatch()).toEqual(testUseDispatch);
    expect(HooksTestHelper.useDispatch).toEqual(realUseDispatch);
  });

  it('checks unMockUseDispatch method', () => {
    HooksTestHelper.unMockUseDispatch();

    expect(reactRedux.useDispatch).toEqual(realUseDispatch);
    expect(HooksTestHelper.useDispatch).toBe(null);
  });
});
