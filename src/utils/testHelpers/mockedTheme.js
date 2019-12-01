import { keys, includes } from 'ramda';

const theme = {
  type: 'Mocked theme',
  colors: {},
  sizes: {},
  fonts: {},
};

const handler = {
  get: (target, key) => {
    const { type } = target;
    const property = target[key];

    if (typeof property === 'object') {
      property.type = key;
      return new Proxy(property, handler);
    }

    if (includes(type, keys(theme))) {
      return type === 'sizes' ? 0 : `[mocked ${key}]`;
    }

    return Reflect.get(target, key);
  },
};

export default new Proxy(theme, handler);
