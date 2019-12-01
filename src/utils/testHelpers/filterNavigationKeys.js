const filterNavigationKeys = (rootRoute) => {
  if (rootRoute.routes) {
    return {
      ...rootRoute,
      routes: rootRoute.routes.map((route) => {
        const { key, ...others } = route;
        return filterNavigationKeys(others);
      }),
    };
  }
  return rootRoute;
};

export default filterNavigationKeys;
