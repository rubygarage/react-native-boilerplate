import yup from '../yup';

describe('yup translation ids', () => {
  it('match snapshot', () => {
    expect(yup).toMatchSnapshot();
  });

  it('string.max', () => {
    expect(yup.string.max({ max: 300 })).toMatchSnapshot();
  });
});
