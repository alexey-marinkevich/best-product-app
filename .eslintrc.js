module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "max-len": ["error", { "code": 120 }],
  },
};
