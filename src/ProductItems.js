import React, { Component } from 'react';
import {connect} from 'react-redux'

import ProductItem from './ProductItem';

class ProductItems extends Component {
  
  render() {
    const renderElems = this.props.products.map((product, idx) => {
      return (
        <ProductItem
          idx={idx}
          prodName={product.prodName}
          headImg={product.headImg}
          shortDescription={product.shortDescription}
        />
      );
    });
    return <div>{renderElems}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}

export default connect (mapStateToProps)(ProductItems);
