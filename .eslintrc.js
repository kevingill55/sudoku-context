// © Copyright 2021 KMG: Sudoku

module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    'plugins': [
        'header',
        'react',
    ],
    'settings': {
      'react': {
        'version': 'detect',
      },
    },
    'rules': {
      'no-unused-vars': 0,
      'eol-last': 2,
      'comma-dangle': ['error', 'always-multiline'],
      'semi': ['error', 'always'],
      'jsx-quotes': ['error', 'prefer-single'],
      'quotes': ['error', 'single'],
      'react/jsx-max-props-per-line': [2, { 'maximum': 1, 'when': 'multiline' }],
      'react/jsx-indent-props': [2, 2],
      'react/prop-types': 1,
      'react/jsx-indent': [2, 2],
      'react/jsx-closing-bracket-location': 2,
      'header/header': [1, 'line', ' © Copyright 2021 KMG: Sudoku'],
      'react/jsx-first-prop-new-line': [2, 'multiline'],
      'react/jsx-tag-spacing': [2, { 'beforeSelfClosing': 'always' }],
    },
};
