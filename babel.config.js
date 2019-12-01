module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  env: {
    test: {
      plugins: ['dynamic-import-node'],
    },
  },
};
