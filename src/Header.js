import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <div>
        <p className="logo">BEST PRODUCT</p>
        <ul className="nav-bar">
          <li className="nav-item">Most Popular</li>
          <li className="nav-item">Categories</li>
          <li className="nav-item">Login</li>
        </ul>
      </div>
    );
  }
}

export default Header;