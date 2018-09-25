// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar className="header" fluid>
    <Navbar.Header>
      <a href="http://swiftnav.com">
        <Navbar.Brand className="logo">
          <img src="/swift-logo.png" alt="Swift Navigation" />
        </Navbar.Brand>
      </a>
    </Navbar.Header>
  </Navbar>
);

export default Header;
