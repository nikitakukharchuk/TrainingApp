module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', '@emotion'],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index'
        ]
      }
    ],
    'import/newline-after-import': 'error',
    'prettier/prettier': 'error'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      },
      '@emotion/jsx-import': 'error',
      '@emotion/no-vanilla': 'error',
      '@emotion/import-from-emotion': 'error',
      '@emotion/styled-import': 'error'
    }
  }
};
