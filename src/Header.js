import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Header = () => {
  return (
    <NavBarContainer>
      <OpenSpace />
      <Logo href="#">BEST PRODUCT</Logo>
      {/* <NavBar>
        <li className="nav-item">
          <Link href="#">Most Popular</Link>
        </li>
        <li className="nav-item">
          <Link href="#">Categories</Link>
        </li>
      </NavBar> */}

      <ProposalFormLink>
        <Link to="/proposal-form">Suggest Product</Link>
      </ProposalFormLink>
    </NavBarContainer>
  );
};

export default Header;

const OpenSpace = styled.div`
  width: 20%;
`;

const Logo = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 20px;
`;

const ProposalFormLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  position: relative;
  padding: 25px 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 15px;
    width: 100%;
    height: 2px;
    background-color: #333;
    transform: translate(150px, 0);
    transition: transform 0.3s;
  }

  :hover {
    &::after {
      transform: translate(0, 0);
    }
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  padding: 0 25px;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const NavBar = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 200px;
  & li {
    display: flex;
  }
`;