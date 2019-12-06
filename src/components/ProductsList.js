import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import Product from '../components/Product';
import { setProductsAction } from '../reducers/coreReducer';

const ProductsList = ({ products, isProductsLoading, setProducts }) => {
  useEffect(() => {
    setProducts();
  }, []);

  if (isProductsLoading) {
    return 'LOADING...';
  }

  return (
    <Wrapper>
      {products.map(product => {
        return (
          <Product
            id={product.id}
            prodName={product.prodName}
            headImg={product.headImg}
            shortDescription={product.shortDescription}
          />
        );
      })}
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    products: state.core.products,
    isProductsLoading: state.core.isProductsLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setProducts: () => dispatch(setProductsAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsList);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`