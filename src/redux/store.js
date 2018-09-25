// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

import { createStore } from 'redux';
import rootReducer from './reducers';

let devMiddleWare = null;

if (process.mode === 'development') {
  /* eslint-disable-next-line */
  const { composeWithDevTools } = require('redux-devtools-extension');
  devMiddleWare = composeWithDevTools();
}

const store = createStore(
  rootReducer,
  devMiddleWare || undefined
);

export default store;
