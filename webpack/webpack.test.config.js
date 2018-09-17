const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const base = require('./webpack.config');

const rootFolder = path.resolve(__dirname, '..');
module.exports = merge(base, {
  entry: ['babel-polyfill', './test/index.js'],
  externals: [nodeExternals()],
  mode: 'none',
  output: {
    filename: 'test.bundle.js',
    path: path.resolve(rootFolder, 'test'),
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.mode": JSON.stringify('test')
    })
  ],
  target: 'node'
});
