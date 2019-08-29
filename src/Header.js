import React from 'react';
import styled from 'styled-components';

const Header = () => {
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
      </NavBar>
      <a href="#">Suggest Product</a>
    </NavBarContainer>
  );
};

export default Header;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 200px;
  font-size: 16px;
  & li {
    display: flex;
    & a {
      text-decoration: none;
      color: black;
    }
  }
`;
