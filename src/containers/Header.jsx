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
