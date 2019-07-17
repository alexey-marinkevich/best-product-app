import React, { Component } from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';

class ProductItems extends Component {
  render() {
    return (
      <div>
        <h1>Items</h1>
        <ProductItem/>
      </div>
    );
  }
}

export default ProductItems;