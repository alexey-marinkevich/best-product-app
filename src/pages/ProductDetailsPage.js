import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { IoIosArrowRoundBack, IoIosGlobe } from 'react-icons/io';

import { loadProductByIdAction } from '../reducers/coreReducer';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    backgroundColor: '#fff',
    zIndex: '99999',
  },
  innerRoot: {
    position: 'relative',
  },
  itemHeader: {
    display: 'flex',
    width: '100%',
    height: '500px',
    overflow: 'hidden',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    left: '0',
    top: '0',
    fontSize: '70px',
    background: 'none',
    border: 'none',
    outline: 'none',
    padding: '10px 60px 60px 40px',
    cursor: 'pointer',
    transition: '0.3s',
    color: '#fff',

    '&:hover': {
      transform: 'translate(-10px, 0)',
    },
  },
  siteUrl: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    padding: '40px 60px 10px 60px',
    fontSize: '30px',
    transform: 'scale(1)',
    color: '#fff',
    transition: '.2s .2s',
    '&::before': {
      content: "'Explore site'",
      position: 'absolute',
      fontSize: '15px',
      left: '100px',
      top: '47px',
      whiteSpace: 'nowrap',
      transform: 'translate(0, 45px)',
      transition: '.2s',
    },
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '.2s',
      '&::before': {
        transform: 'translate(0, 0)',
        transition: '.2s .2s',
      },
    },
  },
  prodImg: (props) => ({
    width: '100%',
    backgroundImage: `url(${props.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transform: 'scale(1)',
    transition: 'transform 10s, filter 1s',
    filter: 'brightness(0.9)',
    zIndex: '-100',
  }),
  content: {
    display: 'flex',
    minHeight: '300px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 25px',
    textAlign: 'center',
    margin: '0 auto',
    '& p': {
      maxWidth: '600px',
      fontSize: '18px',
      backgroundColor: '#fff',
      zIndex: 100,
    },
  },
  sideName: {
    display: 'flex',
    position: 'absolute',
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    boxSizing: 'border-box',
    userSelect: 'none',
    right: '50px',
    top: 0,
    maxHeight: '1000px',
    maxWidth: '140px',

    '& h1': {
      writingMode: 'vertical-lr',
      fontSize: '60px',
      margin: 0,
    },
  },
});

const ProductDetailsPage = ({
  match,
  formFields,
  isPreview,
  history,
  loadProductById,
  activeProduct,
  isActiveProductLoading,
}) => {
  const currProduct = isPreview ? formFields : activeProduct;
  const classes = useStyles({ img: (currProduct && currProduct.headImg) || null });
  console.log(activeProduct);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isPreview) {
      loadProductById(match.params.id);
    }
  }, [loadProductById, match.params.id, isPreview]);

  if (isActiveProductLoading) {
    return 'LOADING';
  }

  if (!currProduct) {
    return 'NOTHING FOUND';
  }

  const handleClose = () => (!isPreview ? history.push('/') : history.push('/suggest-form'));

  return (
    <div className={classes.root}>
      <div className={classes.innerRoot}>
        <div className={classes.itemHeader}>
          <button className={classes.closeBtn} type="button" onClick={handleClose}>
            <IoIosArrowRoundBack htmlFor={classes.closeBtn} />
          </button>
          <div className={classes.prodImg} />
          <a href={currProduct.siteUrl} className={classes.siteUrl} target="_blank" rel="noopener noreferrer">
            <IoIosGlobe htmlFor={classes.siteUrl} />
          </a>
        </div>
        <div className={classes.content}>
          <p>{currProduct.fullDescription}</p>
        </div>
        <div className={classes.sideName}>
          <h1>{currProduct.prodName}</h1>
        </div>
      </div>
      <ImageGallery images={currProduct.gallery} />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  formFields: state.form,
  activeProduct: state.core.activeProduct,
  isActiveProductLoading: state.core.isActiveProductLoading,
});

const mapDispatchToProps = (dispatch) => ({
  loadProductById: (id) => dispatch(loadProductByIdAction(id)),
});

ProductDetailsPage.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
  formFields: PropTypes.shape({
    headImg: PropTypes.string,
    fullDescription: PropTypes.string,
    prodName: PropTypes.string,
    gallery: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  isPreview: PropTypes.bool,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  loadProductById: PropTypes.func.isRequired,
  activeProduct: PropTypes.shape({
    headImg: PropTypes.string,
    fullDescription: PropTypes.string,
    prodName: PropTypes.string,
    gallery: PropTypes.arrayOf(PropTypes.string),
  }),
  isActiveProductLoading: PropTypes.bool.isRequired,
};

ProductDetailsPage.defaultProps = {
  isPreview: false,
  activeProduct: null,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProductDetailsPage);
