const CODE_REGEX = /^[a-zA-Z0-9]{6,15}$/;

// eslint-disable-next-line import/prefer-default-export
export function isCode() {
  return this.test(
    'isCode',
    { id: 'yup.mixed.isCode', icon: 'close' },
    (value) => CODE_REGEX.test(value),
  );
}
