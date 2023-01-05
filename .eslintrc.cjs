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
  // ignorePatterns: ['*.cjs', '*.d.ts'],
  overrides: [
    { files: ['*.svelte'], processor: 'svelte3/svelte3' }
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        'alias': {
          'src': './src',
        },
        'extensions': ['.ts', '.js', '.svelte'],
      },
    },
  },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
