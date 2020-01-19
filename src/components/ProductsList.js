import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Product from './Product';
import { setProductsAction } from '../reducers/coreReducer';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
  loaderWrapper: {
    display: 'flex',
    height: '500px',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const ProductsList = ({ products, isProductsLoading, setProducts }) => {
  const classes = useStyles();

  useEffect(() => {
    setProducts();
  }, [setProducts]);

  if (isProductsLoading) {
    return (
      <div className={classes.loaderWrapper}>
        <CircularProgress/>
      </div>
    ) 
  }

  return (
    <div className={classes.root}>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          prodName={product.prodName}
          headImg={product.headImg}
          shortDescription={product.shortDescription}
        />
      ))}
    </div>
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
