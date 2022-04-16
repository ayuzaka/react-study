/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const config = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'no-use-before-define': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: 'DO NOT DECLARE ENUM',
      },
    ],
    'arrow-body-style': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.tsx', '**/*.test.ts', '**/*.js'],
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};

module.exports = config;
