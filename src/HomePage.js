import React from 'react'

import Header from './Header';
import ProductItems from './ProductItems';
import StyledFooter from './Footer';

const HomePage = () => {
  return (
    <div>
      <Header/>
      <ProductItems/>
      <StyledFooter/>
    </div>
  )
}

export default HomePage;