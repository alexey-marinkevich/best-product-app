import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { IoIosArrowRoundBack } from 'react-icons/io';

import {
  updateFormFieldAction,
  flushFieldsAction,
  suggestProductAction,
} from '../reducers/formReducer';
import SuggestedImagesPreview from '../components/SuggestedImagesPreview';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: '1280px',
    margin: '0 auto',
    overflow: 'hidden',
    paddingBottom: '70px',
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
    fontSize: '70px',
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
    width: '500px',
    fontWeight: 'normal',
    textAlign: 'right',
    position: 'relative',
    alignSelf: 'flex-end',
    marginRight: '120px',
    zIndex: '-9999',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      marginRight: '80px',
      width: '490px',
    },
    [theme.breakpoints.down('xs')]: {
      color: 'transparent',
      fontSize: '0',
    },
    '&::before': {
      content: "'Suggest product'",
      fontSize: '95px',
      fontWeight: '900',
      position: 'absolute',
      writingMode: 'vertical-lr',
      whiteSpace: 'nowrap',
      top: '0',
      right: '-120px',
      [theme.breakpoints.down('sm')]: {
        top: '4px',
        fontSize: '80px',
        marginRight: '20px',
      },
      [theme.breakpoints.down('xs')]: {
        color: '#dcdcdc',
      },
    },
  },
  form: {
    display: 'flex',
    width: '70%',
    maxWidth: '800px',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
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
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  formTopItem: {
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '47%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
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
  formBottomSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  submitBtn: {
    width: '250px',
    height: '50px',
    color: '#fff',
    backgroundColor: '#333',
    fontSize: '14px',
    transition: '0.3s',
    borderRadius: '0',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
  },
  previewBtn: {
    color: '#3336',
    fontSize: '14px',
    transition: '0.3s',
    borderRadius: '0',
    marginTop: '10px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '&:hover': {
      color: '#333',
    },
  },

  addImgBtn: {
    backgroundColor: 'transparent',
    border: '1px solid #333',
    color: '#333',
    transition: '0.3s',
    fontSize: '14px',
    alignSelf: 'flex-start',
    boxShadow: 'none',
    borderRadius: '0',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '&:hover': {
      backgroundColor: '#333',
      color: '#fff',
    },
  },
}));

const SuggestProductPage = ({
  updateFormField,
  suggestProduct,
  prodName,
  prodUrl,
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
    // suggestProduct();
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
        <button type="button" className={classes.closeBtn} onClick={handlePageClose}>
          <IoIosArrowRoundBack htmlFor={classes.closeBtn} />
        </button>
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
              className={classes.formTopItem}
              label="Product Name"
              value={prodName}
              margin="normal"
              onChange={({ target }) => updateFormField('prodName', target.value)}
              disabled={isLoading}
            />
            <TextField
              required
              className={classes.formTopItem}
              label="Product Site"
              value={prodUrl}
              margin="normal"
              helperText="Add origin site URL"
              onChange={({ target }) => updateFormField('prodUrl', target.value)}
              disabled={isLoading}
            />
            <TextField
              required
              className={classes.formTopItem}
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
          <Button
            variant="contained"
            color="primary"
            disabled={isLoading}
            onClick={handleAddImage}
            className={classes.addImgBtn}
          >
            Add Image
          </Button>
          <SuggestedImagesPreview images={gallery} deleteAction={handleDeleteImage} />
        </div>
        {!!error && <div style={{ color: 'red' }}>{error}</div>}
        <div className={classes.formBottomSection}>
          <Button
            variant="contained"
            color="primary"
            disabled={isLoading}
            className={classes.submitBtn}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
          <Button
            variant="text"
            color="primary"
            disabled={isLoading}
            onClick={handleShowPreview}
            className={classes.previewBtn}
          >
            Show Preview
          </Button>
        </div>
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
  error: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SuggestProductPage);
