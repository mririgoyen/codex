const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./common.webpack.config.js');

module.exports = webpackMerge.smart(commonConfig, {
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    disableHostCheck: true,
    hot: true,
    overlay: true,
    port: process.env.ELECTRON_WEBPACK_WDS_PORT,
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      `webpack-dev-server/client?http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`,
      path.resolve(__dirname, '../src/renderer/index.jsx')
    ]
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[name]-[local]-[hash:base64:2]',
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../src/renderer/style/variables.scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        exclude: /\.module.scss$/,
        loader: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../src/renderer/style/variables.scss')
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
