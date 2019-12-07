import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {
  updateFormFieldAction,
  flushFieldsAction,
  suggestProductAction,
} from '../reducers/formReducer';
import SuggestedImagesPreview from '../components/SuggestedImagesPreview';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: '1280px',
    margin: '0 auto',
    '& h2': {
      fontSize: '35px',
      margin: '0',
    },
  },
  containerTopSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  closeBtn: {
    fontSize: '60px',
    background: 'none',
    border: 'none',
    outline: 'none',
    padding: '0 30px 30px',
    cursor: 'pointer',
    transition: '0.3s',
    color: '#333',
    '&:hover': {
      transform: 'translate(-10px, 0)',
    },
  },
  leadText: {
    fontSize: '20px',
    color: '#333',
    width: [
      '100%',
      '500px',
    ],
    fontWeight: 'normal',
    textAlign: 'right',
    position: 'relative',
    alignSelf: 'flex-end',
    marginRight: '120px',
    ':before': {
      content: "'Suggest product",
      fontSize: '95px',
      fontWeight: '900',
      position: 'absolute',
      writingMode: 'vertical-lr',
      whiteSpace: 'nowrap',
      top: '0',
      right: '-120px',
    },
  },
  form: {
    display: 'flex',
    width: '70%',
    maxWidth: '800px',
    flexDirection: 'column',
  },
  mainData: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: '50px',
  },
  mainDataTopSection: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  gallery: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: '50px',
    marginBottom: '30px',
    '& p': {
      margin: '0',
      maxWidth: '400px',
      fontSize: '14px',
    },
  },
  btn: {
    width: '250px',
    height: '50px',
    backgroundColor: 'transparent',
    border: '1px solid #333',
    color: '#333',
    fontSize: '18px',
    cursor: 'pointer',
    transition: '0.3s',
    ': hover': {
      backgroundColor: '#333',
      color: '#fff',
    },
  },
});

const SuggestProductPage = ({
  updateFormField,
  suggestProduct,
  prodName,
  headImg,
  shortDescription,
  fullDescription,
  gallery,
  flushFields,
  isLoading,
  imageGalleryInput,
  error,
  history,
}) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    suggestProduct();
  };

  const validateImageLink = () => {
    const pattern = /^https?:\/{2}[\d\w/.-]{7,}/;

    if (pattern.test(imageGalleryInput)) {
      updateFormField('gallery', [imageGalleryInput, ...gallery]);
      updateFormField('imageGalleryInput', '');
    }
    updateFormField('imageGalleryInput', '');
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    validateImageLink();
  };

  const handleDeleteImage = (id) => {
    const modGallery = [...gallery];
    modGallery.splice(id, 1);
    updateFormField('gallery', modGallery);
  };

  const handlePageClose = () => {
    flushFields();
    history.push('/');
  };

  const handleShowPreview = () => {
    history.push('/suggest-form/product-preview');
  };

  return (
    <div className={classes.root}>
      <div className={classes.containerTopSection}>
        <button type="button" className={classes.closeBtn} onClick={handlePageClose}>🠐</button>
        <p className={classes.leadText}>
        Place where you can suggest interest and good quality products of small or less popular
        companies to share with other people and get to know about it more range of pepople
        </p>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.mainData}>
          <h2>Main Data</h2>
          <div className={classes.mainDataTopSection}>
            <TextField
              required
              label="Product Name"
              value={prodName}
              margin="normal"
              onChange={({ target }) => updateFormField('prodName', target.value)}
              disabled={isLoading}
            />
            <TextField
              required
              label="Main Image"
              value={headImg}
              margin="normal"
              placeholder="Paste URL"
              helperText="Add image that clearly shows the product is"
              onChange={({ target }) => updateFormField('headImg', target.value)}
              disabled={isLoading}
            />
          </div>
          <TextField
            required
            multiline
            label="Short Description"
            value={shortDescription}
            margin="normal"
            placeholder="150 symbols max"
            helperText="Will be available in product preview"
            inputProps={{
              maxLength: 150,
            }}
            onChange={({ target }) => updateFormField('shortDescription', target.value)}
            disabled={isLoading}
          />
          <TextField
            required
            multiline
            label="Full Description"
            value={fullDescription}
            margin="normal"
            helperText="Provide full description here"
            onChange={({ target }) => updateFormField('fullDescription', target.value)}
            disabled={isLoading}
          />
        </div>
        <div className={classes.gallery}>
          <h2>Image Gallery</h2>
          <p>
            Additional images to show more about product. Recomend to paste image url directly from
            the product site or other high quality site
          </p>
          <TextField
            label="Gallery Image"
            value={imageGalleryInput}
            placeholder="Paste URL"
            margin="normal"
            helperText=""
            onChange={({ target }) => updateFormField('imageGalleryInput', target.value)}
            disabled={isLoading}
          />
          <button className={classes.btn} type="button" onClick={handleAddImage} disabled={isLoading}>
            Add
          </button>
          <SuggestedImagesPreview images={gallery} deleteAction={handleDeleteImage} />
          {/*  Todo: Have problem with every tipe rerender complete component, how to solve the problem */}
        </div>
        {!!error && <div style={{ color: 'red' }}>{error}</div>}
        <button className={classes.btn} type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>

        <button className={classes.btn} type="button" onClick={handleShowPreview} disabled={isLoading}>
          Show Preview
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => state.form;

const mapDispatchToProps = (dispatch) => ({
  updateFormField: (fieldName, value) => dispatch(updateFormFieldAction(fieldName, value)),
  flushFields: () => dispatch(flushFieldsAction()),
  suggestProduct: () => dispatch(suggestProductAction()),
});

SuggestProductPage.propTypes = {
  updateFormField: PropTypes.func.isRequired,
  suggestProduct: PropTypes.func.isRequired,
  prodName: PropTypes.string.isRequired,
  headImg: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  fullDescription: PropTypes.string.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
  flushFields: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  imageGalleryInput: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SuggestProductPage);
