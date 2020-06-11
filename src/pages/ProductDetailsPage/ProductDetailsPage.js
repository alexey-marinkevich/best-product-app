import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { loadProductByIdAction } from '../../reducers/coreReducer';
import HeroContainer from './HeroContainer';
import SideName from './SideName';
import ImageGallery from '../../components/ImageGallery';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';

const useStyles = makeStyles((theme) => ({
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
}));

const propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
  formFields: PropTypes.shape({
    headImg: PropTypes.string,
    fullDescription: PropTypes.string,
    prodName: PropTypes.string,
    gallery: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  isFormPreview: PropTypes.bool.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  loadProductById: PropTypes.func.isRequired,
  activeProduct: PropTypes.shape({
    headImg: PropTypes.string,
    fullDescription: PropTypes.string,
    prodName: PropTypes.string,
    gallery: PropTypes.arrayOf(PropTypes.string),
  }),
  isActiveProductLoading: PropTypes.bool.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  activeProduct: null,
  gallery: [],
};

const ProductDetailsPage = ({
  match,
  formFields,
  gallery,
  isFormPreview,
  history,
  loadProductById,
  activeProduct,
  isActiveProductLoading,
}) => {
  const previewData = { ...formFields, gallery };
  const currProduct = isFormPreview ? previewData : activeProduct;
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isFormPreview) {
      loadProductById(match.params.id);
    }
  }, [loadProductById, match.params.id, isFormPreview]);

  if (isActiveProductLoading) {
    return <Loader />;
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
  const { prodUrl, prodName, fullDescription } = currProduct;

  return (
    <div className={classes.root}>
      <div className={classes.innerRoot}>
        <HeroContainer heroImg={currProduct.headImg} prodUrl={prodUrl} handleClose={handleClose} />
        <SideName prodName={prodName} />
        <div className={classes.content}>
          <p>{fullDescription}</p>
        </div>
      </div>
      <ImageGallery images={isFormPreview ? currProduct.gallery : currProduct.gallery} />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  formFields: state.form.formFields,
  gallery: state.form.productGallery.gallery,
  isFormPreview: state.form.isFormPreview,
  activeProduct: state.core.activeProduct,
  isActiveProductLoading: state.core.isActiveProductLoading,
});

const mapDispatchToProps = (dispatch) => ({
  loadProductById: (id) => dispatch(loadProductByIdAction(id)),
});

ProductDetailsPage.propTypes = propTypes;
ProductDetailsPage.defaultProps = defaultProps;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProductDetailsPage);
