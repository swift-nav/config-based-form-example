// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

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
