import isPresent from '../isPresent';

describe('isPresent', () => {
  it('returns true if is not empty and is not null', () => {
    const testObject = 'test';
    expect(isPresent(testObject)).toBeTruthy();
  });

  it('returns false if is empty', () => {
    const testObject = '';
    expect(isPresent(testObject)).toBeFalsy();
  });

  it('returns false if is null', () => {
    const testObject = null;
    expect(isPresent(testObject)).toBeFalsy();
  });
});
