/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    'next',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    'linebreak-style': [
      'error',
      require('os').EOL === '\r\n' ? 'windows' : 'unix',
    ],
    'no-debugger': 'off',
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-argument': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'linebreak-style': [
      'error',
      require('os').EOL === '\r\n' ? 'windows' : 'unix',
    ],
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-unsafe-enum-comparison': 0,
  },
  globals: {
    React: 'writable',
    document: false,
    Map: false,
    Promise: false,
  },
  ignorePatterns: ['**/*.js', '**/*.mjs', '**/*.cjs'],
  reportUnusedDisableDirectives: true,
};

module.exports = config;
