import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <StyledFooter>
    <p>All rights reserved 2019</p>
  </StyledFooter>
);

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: 25px;

  p {
    font-size: 16px;
  }
`;
