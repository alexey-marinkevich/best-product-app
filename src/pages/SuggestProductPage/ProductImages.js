import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { setGalleryAction, setGalleryInputAction } from '../../reducers/formReducer';
import SuggestedImagesPreview from './SuggestedImagesPreview';

const useStyles = makeStyles((theme) => ({
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

const propTypes = {
  galleryInput: PropTypes.string,
  gallery: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  setGalleryInput: PropTypes.func.isRequired,
  setGallery: PropTypes.func.isRequired,
};

const defaultProps = {
  galleryInput: '',
  gallery: [],
  isLoading: false,
};

const ProductImages = ({
  galleryInput, setGalleryInput, gallery, setGallery, isLoading,
}) => {
  const classes = useStyles();

  const validateImageLink = () => {
    const pattern = /^https?:\/{2}[\d\w/.-]{7,}/;

    if (pattern.test(galleryInput)) {
      setGallery([galleryInput, ...gallery]);
    }

    setGalleryInput('');
  };

  const handleDeleteImage = (id) => {
    const modGallery = [...gallery];
    modGallery.splice(id, 1);
    setGallery(modGallery);
  };

  return (
    <>
      <TextField
        label="Gallery Image"
        placeholder="Paste URL"
        margin="normal"
        disabled={isLoading}
        value={galleryInput}
        onChange={({ target }) => setGalleryInput(target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={isLoading}
        onClick={validateImageLink}
        className={classes.addImgBtn}
      >
        Add Image
      </Button>
      <SuggestedImagesPreview images={gallery} deleteAction={handleDeleteImage} />
    </>
  );
};

const mapStateToProps = (state) => ({
  galleryInput: state.form.productGallery.input,
  gallery: state.form.productGallery.gallery,
  isLoading: state.form.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  setGallery: (images) => dispatch(setGalleryAction(images)),
  setGalleryInput: (inputText) => dispatch(setGalleryInputAction(inputText)),
});


ProductImages.propTypes = propTypes;
ProductImages.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProductImages);
