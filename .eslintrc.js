/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
// module.exports = {
//   parser: 'babel-eslint',

//   extends: [
//     // 'airbnb',
//     'plugin:flowtype/recommended',
//     'plugin:css-modules/recommended',
//     // 'prettier',
//     'prettier/flowtype',
//     'prettier/react',
//   ],

//   plugins: ['flowtype', 'css-modules', 'prettier'],

//   globals: {
//     __DEV__: true,
//   },

//   env: {
//     browser: true,
//   },

//   rules: {
//     // Forbid the use of extraneous packages
//     // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
//     // 'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],

//     // Recommend not to leave any console.log in your code
//     // Use console.error, console.warn and console.info instead
//     // https://eslint.org/docs/rules/no-console
//     'no-console': [
//       'error',
//       {
//         allow: ['warn', 'error', 'info'],
//       },
//     ],

//     // Prefer destructuring from arrays and objects
//     // http://eslint.org/docs/rules/prefer-destructuring
//     'prefer-destructuring': [
//       'error',
//       {
//         VariableDeclarator: {
//           array: false,
//           object: true,
//         },
//         AssignmentExpression: {
//           array: false,
//           object: false,
//         },
//       },
//       {
//         enforceForRenamedProperties: false,
//       },
//     ],

//     // Ensure <a> tags are valid
//     // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
//     'jsx-a11y/anchor-is-valid': [
//       'error',
//       {
//         components: ['Link'],
//         specialLink: ['to'],
//         aspects: ['noHref', 'invalidHref', 'preferButton'],
//       },
//     ],
//     'jsx-a11y/label-has-for': 'off',
//     'jsx-a11y/no-autofocus': 'off',

//     // Allow .js files to use JSX syntax
//     // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
//     'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

//     // Functional and class components are equivalent from React’s point of view
//     // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
//     'react/prefer-stateless-function': 'off',

//     // ESLint plugin for prettier formatting
//     // https://github.com/prettier/eslint-plugin-prettier
//     // 'prettier/prettier': 'error',
//     'no-unused-expressions': 'off',
//     'react/forbid-prop-types': 'warn'
//   },

//   settings: {
//     // Allow absolute paths in imports, e.g. import Button from 'components/Button'
//     // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
//     'import/resolver': {
//       node: {
//         moduleDirectory: ['node_modules', 'src'],
//       },
//     },
//   },
// };

module.exports = {
  env: {
    amd: true,
    node: true,
    browser: true,
    jquery: true,
  },
  extends: [
    // "walmart/configurations/es6-react",
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:css-modules/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: ['flowtype', 'css-modules', 'react', 'jsx-a11y', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 5,
  },
  rules: {
    strict: [2, 'global'],
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
    // Functional and class components are equivalent from React’s point of view
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'complexity': 'off',
    'no-magic-numbers': 0,
    'max-statements': 'off',
    'max-params': 0,
    'eol-last': 'off',
    'react/prop-types': [2, { ignore: ['children'] }],
    'jsx-a11y/label-has-for': 'off',
    // 'prettier/prettier': 'error',
    // "max-len": ["error", {"code": 200, "ignoreUrls": true}],
    'max-len': 'off',
    'curly': 'off',
  },
  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
