import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { IoIosArrowRoundBack, IoIosGlobe } from 'react-icons/io';

import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';
import { loadProductByIdAction } from '../reducers/coreReducer';

const useStyles = makeStyles((theme) => ({
  loaderWrapper: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errMessage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    '& h1': {
      fontSize: '40px',
      margin: 0,
    },
  },
  root: {
    position: 'relative',
    backgroundColor: '#fff',
    zIndex: '99999',
  },
  innerRoot: {
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
    padding: '14px 60px 60px 30px',
    cursor: 'pointer',
    transition: '0.3s',
    color: '#333',
    '&:hover': {
      transform: 'translate(-10px, 0)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '20px 50px 6vh 4vw',
      color: '#fff',
    },
  },
  itemHeader: {
    display: 'flex',
    width: '100%',
    height: '80vh',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      height: '100vh',
    },
  },
  prodImg: (props) => ({
    width: '85%',
    height: '85%',
    alignSelf: 'flex-end',
    backgroundImage: `url(${props.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transform: 'scale(1)',
    transition: 'transform 10s, filter 1s',
    filter: 'brightness(0.8)',
    zIndex: '-100',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
      alignSelf: 'flex-start',
    },
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
      left: '95px',
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
  sideName: {
    display: 'flex',
    position: 'absolute',
    height: '100%',
    width: '15%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    boxSizing: 'border-box',
    userSelect: 'none',
    right: 0,
    top: 0,
    maxHeight: '1000px',
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
  savedGallery,
  isFormPreview,
  history,
  loadProductById,
  activeProduct,
  isActiveProductLoading,
}) => {
  const previewData = { formFields, savedGallery };
  const currProduct = isFormPreview ? previewData : activeProduct;
  const classes = useStyles({ img: (currProduct && currProduct.headImg) || null });
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isFormPreview) {
      loadProductById(match.params.id);
    }
  }, [loadProductById, match.params.id, isFormPreview]);

  if (isActiveProductLoading) {
    return (
      <div className={classes.loaderWrapper}>
        <CircularProgress />
      </div>
    );
  }

  if (!currProduct) {
    return (
      <div className={classes.errMessage}>
        <h1>PAGE NOT FOUND</h1>
        <p>Please, reload the page</p>
      </div>
    );
  }

  const handleClose = () => (!isFormPreview ? history.push('/') : history.push('/suggest-form'));

  const { siteUrl, prodName, fullDescription } = currProduct.formFields;

  return (
    <div className={classes.root}>
      <div className={classes.innerRoot}>
        <div className={classes.itemHeader}>
          <button className={classes.closeBtn} type="button" onClick={handleClose}>
            <IoIosArrowRoundBack htmlFor={classes.closeBtn} />
          </button>
          <div className={classes.prodImg} />
          <a href={siteUrl} className={classes.siteUrl} target="_blank" rel="noopener noreferrer">
            <IoIosGlobe htmlFor={classes.siteUrl} />
          </a>
        </div>
        <div className={classes.sideName}>
          <h1>{prodName}</h1>
        </div>
        <div className={classes.content}>
          <p>{fullDescription}</p>
        </div>
      </div>
      <ImageGallery images={currProduct.savedGallery} />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  formFields: state.form.formFields,
  savedGallery: state.form.previewGallery,
  isFormPreview: state.form.isFormPreview,
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
  isFormPreview: PropTypes.bool,
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
  // isFormPreview: false,
  activeProduct: null,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProductDetailsPage);
