const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const build = require('./webpack.build.config');

module.exports = merge(build, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    stats: 'errors-only',
    host: process.env.EXTERNAL_HOSTNAME,
    port: 3000,
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.mode": JSON.stringify('development')
    })
  ]
});
