import makeFormSubmitAction from '../makeFormSubmitAction';

describe('makeFormSubmitAction()', () => {
  const type = 'TEST_ACTION_TYPE';
  const values = { value1: 'value1' };
  const setErrors = jest.fn();
  const setSubmitting = jest.fn();
  const setStatus = jest.fn();
  const resetForm = jest.fn();
  const setValues = jest.fn();
  const payload = { any: 'thing' };
  const action = makeFormSubmitAction(type);

  it('creates action that passes type, values, formik context and additional payload', () => {
    expect(
      action(values, setErrors, setSubmitting, setStatus, resetForm, setValues, payload),
    ).toEqual({
      type,
      values,
      form: {
        setErrors, setSubmitting, setStatus, resetForm, setValues,
      },
      ...payload,
    });
  });

  it('creates action that passes type, values, formik context without payload', () => {
    expect(
      action(values, setErrors, setSubmitting, setStatus, resetForm, setValues),
    ).toEqual({
      type,
      values,
      form: {
        setErrors, setSubmitting, setStatus, resetForm, setValues,
      },
    });
  });
});
