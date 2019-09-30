const { LoaderOptionsPlugin, EnvironmentPlugin } = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')

const { config } = require('./common')


module.exports = merge(config, {
  devtool: 'hidden-source-map',

  output: {
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    crossOriginLoading: 'anonymous',
  },

  module: {
    rules: [],
  },

  optimization: {
    minimize: true,
    namedModules: false,
    namedChunks: false,
    noEmitOnErrors: true,
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    flagIncludedChunks: true,
    occurrenceOrder: true,
    providedExports: true,
    usedExports: true,
    concatenateModules: true,
    sideEffects: true,
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        cache: true,
        sourceMap: true,
        uglifyOptions: {
          compress: {
            drop_console: true,
          }
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        default: false,

        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          filename: '[name]-[chunkhash].js',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),

    new EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
})
