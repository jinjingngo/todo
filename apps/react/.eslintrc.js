module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    'arrow-body-style': 'off',
    'comma-dangle': ['off', {functions: 'never'}],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'max-len': [
      'warn',
      {
        code: 100,
      },
    ],
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-restricted-exports': 'off',
    'object-curly-spacing': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/function-component-definition': ['error', {namedComponents: 'arrow-function'}],
    'react/jsx-fragments': ['error', 'element'],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
