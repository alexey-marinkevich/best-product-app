import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Product from './Product';
import { setProductsAction } from '../reducers/coreReducer';

const ProductsList = ({ products, isProductsLoading, setProducts }) => {
  useEffect(() => {
    setProducts();
  }, [setProducts]);

  if (isProductsLoading) {
    return 'LOADING...';
  }

  return (
    <Wrapper>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          prodName={product.prodName}
          headImg={product.headImg}
          shortDescription={product.shortDescription}
        />
      ))}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  products: state.core.products,
  isProductsLoading: state.core.isProductsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setProducts: () => dispatch(setProductsAction()),
});

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  isProductsLoading: PropTypes.bool.isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsList);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
