module.exports = {
  env: {
    es2021: true,
    jest: true,
  },

  extends: ['eslint:recommended', 'plugin:react/recommended'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: 12,

    sourceType: 'module',
  },

  plugins: ['react', 'prettier'],

  rules: {
    'prettier/prettier': 'error',

    indent: ['error', 2],

    'linebreak-style': ['error', 'unix'],

    quotes: ['error', 'single'],
    'react/prop-types': 0,
    semi: ['error', 'always'],
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
