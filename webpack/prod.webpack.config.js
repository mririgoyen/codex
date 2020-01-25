const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./common.webpack.config.js');

module.exports = merge.smart(commonConfig, {
  entry: {
    app: [
      path.resolve(__dirname, '../src/renderer/index.jsx')
    ]
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[name]-[local]-[hash:base64:2]',
              }
            }
          },
          'sass-loader',
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['node_modules']
              }
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
  }
});
