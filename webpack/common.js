const { cpus } = require('os')
const { resolve } = require('path')

const { EnvironmentPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HappyPack = require('happypack')

const { NODE_ENV, PORT, MOCK_PORT } = process.env
const IS_PROD = NODE_ENV === 'production'
const IS_DEV = NODE_ENV === 'development'
const IS_TEST = NODE_ENV === 'test'
const API_URL = NODE_ENV.API_URL || `http://localhost:${MOCK_PORT || 8080}`

const PUBLIC = resolve(__dirname, '..', 'public')
const DIST = resolve(__dirname, '..', 'dist')
const SRC = resolve(__dirname, '..', 'src')

const mode = IS_DEV || IS_TEST ? 'development' : 'production'

const config = {
  mode,
  context: SRC,
  target: 'web',

  entry: {
    polyfill: [
      '@babel/polyfill',
      'whatwg-fetch',
    ],
    index: ['./index'],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [SRC, 'node_modules'],
  },

  output: {
    path: DIST,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'happypack/loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
      },
    ],
  },

  plugins: [
    new HappyPack({
      threads: cpus().length,
      loaders: ['babel-loader'],
    }),

    new EnvironmentPlugin({
      NODE_ENV: NODE_ENV || 'development',
      API_URL: API_URL,
    }),

    new HtmlWebpackPlugin({
      title: 'Weather UI',
      description: 'Weather UI',
      filename: 'index.html',
      template: `${PUBLIC}/index.html`,
      env: NODE_ENV || 'development',
    }),
  ],

  stats: {
    colors: true,
    children: false,
  },
}

module.exports = {
  config,

  PORT,
  MOCK_PORT,

  IS_DEV,
  IS_PROD,
  IS_TEST,

  PUBLIC,
  DIST,
  SRC,
}
