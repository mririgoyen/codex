const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(woff2?)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ],
  resolve: {
    alias: {
      '~/assets': path.resolve(__dirname, '../assets'),
      '~/components': path.resolve(__dirname, '../components')
    },
    extensions: ['.js', '.jsx', '.json', '.scss'],
    symlinks: false
  }
};
