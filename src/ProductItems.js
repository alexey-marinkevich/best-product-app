import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';
import { setProducts } from './actions/core.actions';

class ProductItems extends Component {
  componentDidMount() {
    this.props.initPage();
  }

  render() {
    const { products, isProductsLoadoing } = this.props;

    if (isProductsLoadoing) {
      return 'LOADING...';
    }

    if (Array.isArray(products) && !products.length) {
      return 'NO PRODUCTS FOUND';
    }

    return (
      <div>
        {products.map((product, idx) => {
          return (
            <ProductItem
              idx={idx}
              prodName={product.prodName}
              headImg={product.headImg}
              shortDescription={product.shortDescription}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.core.products,
    isProductsLoadoing: state.core.isProductsLoadoing,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initPage: () => dispatch(setProducts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductItems);
