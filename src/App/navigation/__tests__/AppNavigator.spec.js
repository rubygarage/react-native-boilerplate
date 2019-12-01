import React from 'react';
import { shallow } from 'enzyme';

import filterNavigationKeys from 'utils/testHelpers/filterNavigationKeys';
import AppNavigatorWrapped from '../AppNavigator';

describe('AppNavigator component', () => {
  it('renders correctly', () => {
    const component = shallow(<AppNavigatorWrapped />);

    const { routes } = component.state().nav;
    const fixedRoutes = routes.map(filterNavigationKeys);
    const fixedNav = { ...component.state().nav, routes: fixedRoutes };
    component.setState({ nav: fixedNav });

    expect(component).toMatchSnapshot();
  });
});
