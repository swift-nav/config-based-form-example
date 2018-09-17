const path = require('path');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const base = require('./webpack.config');

const rootFolder = path.resolve(__dirname, '..');
module.exports = merge(base, {
  entry: ['./src/theme/__index.scss', 'babel-polyfill', './src/index.jsx'],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  url: false,
                  minimize: true,
                  sourceMap: true
              }
          },
          'resolve-url-loader',
          {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
          }
        ]
      },
      {
        parser: {
          amd: false
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'static', to: '../build' }]),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(rootFolder, 'build'),
  }
});
