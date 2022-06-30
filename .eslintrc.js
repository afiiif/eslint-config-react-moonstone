module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb-typescript', 'plugin:unicorn/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['sonarjs', 'simple-import-sort'],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],

    // React
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',

    // Import
    'import/prefer-default-export': 'off',

    // Typescript
    '@typescript-eslint/no-explicit-any': 'warn',

    // Simple import sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // Unicorn
    'unicorn/prefer-module': 'warn',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-await-expression-member': 'warn',
    'unicorn/import-index': 'error',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          camelCase: true,
        },
      },
    ],

    // Sonar
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/no-element-overwrite': 'error',
    'sonarjs/no-nested-switch': 'error',
    'sonarjs/no-nested-template-literals': 'error',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:unicorn/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:testing-library/react',
        'prettier',
      ],
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
  },
};
