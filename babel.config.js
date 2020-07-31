module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
  ],
  env: {
    test: {
      plugins: ['dynamic-import-node'],
    },
  },
};
