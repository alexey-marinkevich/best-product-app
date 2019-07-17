import React, { Component } from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';


class ProductItems extends Component {
  render() {
    return (
      <div>
        <ProductItem/>
        <ProductItem/>
      </div>
    );
  }
}

export default ProductItems;