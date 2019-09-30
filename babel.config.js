module.exports = {

  presets: [
    /**
     * useBuiltIns option
     *
     * @description:
     *  entry - option only include the polyfills your targets need.
     *  usage (experimental) - Adds specific imports for polyfills when they are used in each file. We take advantage of the fact that a bundler will load the same polyfill only once.
     */
    ['@babel/preset-env', { useBuiltIns: 'entry', 'corejs': '3.2.1', modules: false }],
    '@babel/preset-react',
    '@babel/preset-flow',
  ],

  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-pipeline-operator', {
      proposal: 'minimal',
    }],
    ['babel-plugin-styled-components', {
      displayName: true,
      fileName: true,
      minify: false,
    }],
  ],

  env: {
    development: {
      plugins: [
        ['babel-plugin-styled-components', {
          displayName: true,
          fileName: true,
          minify: false,
        }],
      ],
    },

    production: {
      plugins: [
        ['babel-plugin-styled-components', {
          displayName: false,
          fileName: false,
          minify: true,
        }],

        ['transform-react-remove-prop-types', { mode: 'remove', ignoreFilenames: ['node_modules'] }],
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
        'closure-elimination',
        ['ramda', { 'useES': true }],
      ],
    },

    test: {
      presets: [
        ['@babel/preset-env'],
        '@babel/preset-react',
        '@babel/preset-flow',
      ],
    }
  },

}
