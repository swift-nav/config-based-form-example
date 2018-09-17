const webpack = require('webpack');
const merge = require('webpack-merge');
const build = require('./webpack.build.config');

module.exports = merge(build, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      "process.mode": JSON.stringify('production')
    })
  ]
});
