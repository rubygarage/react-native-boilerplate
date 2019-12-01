import errorResponse from './__mocks__/errorResponse';
import assignFormErrors from '../assignFormErrors';

describe('assignFormErrors()', () => {
  const form = {
    setErrors: jest.fn(),
    setStatus: jest.fn(),
  };
  const error = {
    ...errorResponse,
  };

  describe('formats, divides and sets field and form level errors', () => {
    it('with default status keys', () => {
      assignFormErrors(form, error);
      expect(form.setStatus).toHaveBeenCalledWith({ base: 'Wrong credentials' });
      expect(form.setErrors).toHaveBeenCalledWith({ email: 'Must be filled', password: 'Must be filled' });
    });

    it('with custom status keys', () => {
      assignFormErrors(form, error, ['base', 'email']);
      expect(form.setStatus).toHaveBeenCalledWith({ base: 'Wrong credentials', email: 'Must be filled' });
      expect(form.setErrors).toHaveBeenCalledWith({ password: 'Must be filled' });
    });
  });
});
