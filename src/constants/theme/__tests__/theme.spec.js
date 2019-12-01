import theme from '../index';

describe('theme', () => {
  it('matches snapshot', () => {
    expect(theme).toMatchSnapshot();
  });
});
