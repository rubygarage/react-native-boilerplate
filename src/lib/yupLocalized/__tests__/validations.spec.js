import yup from '../yupLocalized';

describe('isCode()', () => {
  const testSchema = yup.mixed().isCode();

  it('resolves validation', async () => {
    const testValue = 'TEST12';
    const result = await testSchema.validate(testValue);

    expect(result).toBe(testValue);
  });

  it('rejects validation with short code', async () => {
    const testValue = 'TEST';
    try {
      await testSchema.validate(testValue);
    } catch (error) {
      expect(error.message).toEqual({ icon: 'close', id: 'yup.mixed.isCode' });
    }
  });

  it('rejects validation with long code', async () => {
    const testValue = 'TEST012345678910';
    try {
      await testSchema.validate(testValue);
    } catch (error) {
      expect(error.message).toEqual({ icon: 'close', id: 'yup.mixed.isCode' });
    }
  });

  it('rejects validation with specialSymbol', async () => {
    const testValue = 'TEST012!';
    try {
      await testSchema.validate(testValue);
    } catch (error) {
      expect(error.message).toEqual({ icon: 'close', id: 'yup.mixed.isCode' });
    }
  });
});
