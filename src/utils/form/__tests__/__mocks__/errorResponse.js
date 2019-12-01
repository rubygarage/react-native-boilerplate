export default {
  response: {
    data: {
      errors: [
        {
          detail: 'Wrong credentials',
          source: {
            pointer: '/data/attributes/base',
          },
        },
        {
          detail: 'must be filled',
          source: {
            pointer: '/data/attributes/email',
          },
        },
        {
          detail: 'must be filled',
          source: {
            pointer: '/data/attributes/password',
          },
        },
      ],
    },
  },
};
