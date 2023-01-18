module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: [
    'svelte3',
    '@typescript-eslint'
  ],
  overrides: [
    { files: ['*.svelte'], processor: 'svelte3/svelte3' }
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '$lib': 'src/lib',
          '$app': 'node_modules/@sveltejs/kit/src/runtime/app',
          '$env': 'node_modules/@sveltejs/kit/src/runtime/env',
        }
      },
      typescript: {},
    },
  },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/prefer-default-export': 'off',
    'import/no-mutable-exports': 'off',
  },
};
