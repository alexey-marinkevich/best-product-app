import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { IoIosArrowRoundBack, IoIosGlobe } from 'react-icons/io';

import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';
import { loadProductByIdAction } from '../reducers/coreReducer';

const useStyles = makeStyles((theme) => ({
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
    height: '70vh',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      height: '100vh',
    },
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
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5vw 60px 4vw',
    },
  },
  siteUrl: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    padding: '40px 60px 20px 60px',
    fontSize: '30px',
    transform: 'scale(1)',
    color: '#fff',
    transition: '.2s .2s',
    [theme.breakpoints.down('sm')]: {
      padding: '40px 5vw 40px 6vw',
    },
    [theme.breakpoints.down('xs')]: {
      left: '50%',
      bottom: '50px',
      padding: '20px',
      fontSize: '40px',
      transformOrigin: 'center left',
      transform: 'scale(1) translate(-50%, 0)',
    },
    '&::before': {
      content: "'Explore site'",
      position: 'absolute',
      fontSize: '15px',
      left: '100px',
      top: '47px',
      whiteSpace: 'nowrap',
      transform: 'translate(0, 55px)',
      transition: '.2s',
      [theme.breakpoints.down('sm')]: {
        content: "''",
      },
    },
    '&:hover': {
      transform: 'scale(1.2)',
      transition: '.2s',
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(1.3) translate(-50%, 0)',
      },
      '&::before': {
        transform: 'translate(-5px, 0) scale(0.9)',
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
    minHeight: '200px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 25px',
    textAlign: 'center',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      padding: '0 15px 25px 15px',
      minHeight: 'auto',
    },
    '& p': {
      maxWidth: '600px',
      fontSize: '18px',
      backgroundColor: '#fff',
      zIndex: 100,
      [theme.breakpoints.down('xs')]: {
        fontSize: '16px',
      },
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
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      right: '0',
      top: '0',
      maxWidth: 'inherit',
      textAlign: 'center',
      position: 'relative',
      width: '100%',
      padding: '0',
      maxHeight: '1000px',
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('xs')]: {
      whiteSpace: 'inherit',
    },

    '& h1': {
      writingMode: 'vertical-lr',
      fontSize: '60px',
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        writingMode: 'horizontal-tb',
        padding: '5px 30px 10px 30px',
        backgroundColor: '#fff',
        transform: 'translate(0, -6vh)',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '10vw',
        padding: '30px 0 0 0',
        transform: 'translate(0, 0)',
      },
    },
  },
}));

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

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isPreview) {
      loadProductById(match.params.id);
    }
  }, [loadProductById, match.params.id, isPreview]);

  if (isActiveProductLoading) {
    return 'LOADING';
  }
  // todo: Change loading to spinner

  if (!currProduct) {
    return 'NOTHING FOUND';
    // todo: make styles to this 
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
          <a
            href={currProduct.siteUrl}
            className={classes.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosGlobe htmlFor={classes.siteUrl} />
          </a>
        </div>
        <div className={classes.sideName}>
          <h1>{currProduct.prodName}</h1>
        </div>
        <div className={classes.content}>
          <p>{currProduct.fullDescription}</p>
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
