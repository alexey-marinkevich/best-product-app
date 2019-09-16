import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';
import { setProducts } from './reducers/coreReducer';

const ProductItems = ({ products, isProductsLoadoing, initPage }) => {
  useEffect(() => {
    initPage();
  }, []);

  if (isProductsLoadoing) {
    return 'LOADING...';
  }

  if (Array.isArray(products) && !products.length) {
    return 'NO PRODUCTS FOUND';
  }

  return (
    <div>
      {products.map((product, id) => {
        return (
          <ProductItem
            idx={id}
            prodName={product.productName}
            headImg={product.headImg}
            shortDescription={product.shortDescription}
          />
        );
      })}
    </div>
  );
};

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
