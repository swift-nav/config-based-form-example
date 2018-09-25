// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Footer, Header, Main } from './containers';

ReactDOM.render(
  (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  ), document.getElementById('root')
);
