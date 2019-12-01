import filterNavigationKeys from '../filterNavigationKeys';

describe('filterNavigationKeys', () => {
  const rootRoute = {
    routes: [
      {
        name: 'Root',
        key: 'rootKey',
        routes: [
          {
            name: 'subRoute1',
            key: 'subRouteKey1',
          },
          {
            name: 'subRoute2',
            key: 'subRouteKey2',
          },
        ],
      },
    ],
  };

  it('removes all ids from routes', () => {
    expect(filterNavigationKeys(rootRoute)).toEqual({
      routes: [
        { name: 'Root', routes: [{ name: 'subRoute1' }, { name: 'subRoute2' }] },
      ],
    });
  });
});
