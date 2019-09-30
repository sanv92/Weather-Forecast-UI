module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'react',
    'flowtype',
    'import',
    'unicorn',
    'jsx-a11y',
  ],
  extends: [
    'airbnb-base',
    'airbnb',
    'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/babel',
    'prettier/react',
    'prettier/standard',
    'prettier/unicorn',
  ],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    /**
     * javascript common settings
     */
    'unicorn/filename-case': ['error', { 'case': 'kebabCase' }],

    'jsx-a11y/anchor-is-valid': 'off',

    strict: 'off',
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    'vars-on-top': 'off',
    semi: ['error', 'never'],
    'no-confusing-arrow': 'off',
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, consistent: true },
      ObjectPattern: { multiline: true, consistent: true },
      ImportDeclaration: { multiline: true, consistent: true },
      ExportDeclaration: { multiline: true, consistent: true },
    }],
    'object-curly-spacing': ['error', 'always'],

    'arrow-parens': ['error', 'always'],

    'id-match': ['error', '^(([A-Za-z0-9]+){2,})|([A-Z][A-Z_0-9]+)$', {
      properties: false,
      onlyDeclarations: true,
    }],

    'no-magic-numbers': ['error', {
      ignore: [1, 0, -1],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
        '&&': 'before',
        '+': 'before',
        '||': 'before',
        '??': 'before',
      }
    },
    ],
    'brace-style': ['error', 'stroustrup'],
    'quote-props': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'implicit-arrow-linebreak': ['error', 'beside'],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],

    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/no-absolute-path': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-named-as-default': 'off',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'error',
    'import/unambiguous': 'error',
    'import/no-commonjs': 'error',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'error',
    'import/first': 'error',
    'import/exports-last': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': ['error', 'never',
      [
        'json', 'json5',
        'less', 'css', 'scss', 'sass', 'styl',
        'jpeg', 'jpg', 'png', 'svg', 'bmp', 'gif',
      ].reduce((obj, ext) => Object.assign(obj, { [ext]: 'always' }), {}),
    ],
    'import/newline-after-import': ['error', { count: 2 }],
    'import/prefer-default-export': 'off',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-default-export': 'error',
    'import/group-exports': 'off',
    'import/no-useless-path-segments': ['error', {
      noUselessIndex: true,
    }],
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always-and-inside-groups',
    }],

    'unicorn/catch-error-name': ['error', { name: 'error' }],
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/import-index': 'off',
    'unicorn/consistent-function-scoping': 'off',

    /**
     * React settings
     */
    'react/destructuring-assignment': 'off',
    'no-unused-vars': [
      'error',
      { 'varsIgnorePattern': '_$|^React$' }
    ],
    'class-methods-use-this': ['error', {
      exceptMethods: [
        'componentDidCatch',
        'componentDidMount',
        'componentDidUpdate',
        'componentWillMount',
        'componentWillReceiveProps',
        'componentWillUnmount',
        'componentWillUpdate',
        'render',
        'shouldComponentUpdate',
      ]
    }],

    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    'no-await-in-loop': 'error',

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': ['error', {
      ignore: ['classes', 'theme', 'sheet', 'sheets'],
    }],
    'react/no-access-state-in-setstate': 'error',
    'react/forbid-foreign-prop-types': 'error',
    'react/jsx-max-depth': ['error', { max: 7 }],

    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
  settings: {
    'import/resolver': {
      'node': {
        'moduleDirectory': [
          '../node_modules',
          './'
        ]
      }
    }
  }
}
