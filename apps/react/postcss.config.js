module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-nested': {},
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',
      stage: 0,
    },
  },
};
