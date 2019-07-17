import React, { Component } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 250px;
  font-size: 18px;
  & li {
    display: flex;
    & a {
      text-decoration: none;
      color: black;
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <NavBarContainer>
        <p className="logo">BEST PRODUCT</p>
        <NavBar>
          <li className="nav-item">
            <a href="#">Most Popular</a>
          </li>
          <li className="nav-item">
            <a href="#">Categories</a>
          </li>
          <li className="nav-item">
            <a href="#">Login</a>
          </li>
        </NavBar>
      </NavBarContainer>
    );
  }
}

export default Header;
