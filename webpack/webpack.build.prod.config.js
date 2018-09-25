// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

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
