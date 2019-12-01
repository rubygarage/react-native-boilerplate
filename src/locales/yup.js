export default {
  mixed: {
    required: { id: 'yup.mixed.required' },
  },
  string: {
    max: ({ max }) => ({ id: 'yup.string.max', values: { max } }),
  },
};
