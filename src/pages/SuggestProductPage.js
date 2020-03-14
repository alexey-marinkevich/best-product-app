import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { API } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import {
  Snackbar, Button, TextField, CircularProgress,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { IoIosArrowRoundBack } from 'react-icons/io';

import {
  setFormFieldsAction,
  setFormPreviewAction,
  setGalleryAction,
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
  history,
  savedFields,
  savedGallery,
  setFormFields,
  setFormPreview,
  setGallery,
  isFormPreview,
}) => {
  const [galleryInput, setGalleryInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const classes = useStyles();
  const {
    register, handleSubmit, reset, getValues, setValue,
  } = useForm();

  const autoHideTime = 2500;

  useEffect(() => {
    if (isFormPreview) {
      Object.keys(savedFields).map((key) => setValue(key, savedFields[key]));
    }
  }, [savedFields]);

  const onSubmit = async (data) => {
    const apiName = 'products';
    const path = '/product';
    const myInit = {
      body: {
        ...data,
        gallery: savedGallery,
      },
    };
    try {
      setIsLoading(true);
      await API.post(apiName, path, myInit);
      reset();
      setGallery([]);
      setIsLoading(false);
      setIsRequestError(false);
      setIsSnackOpen(true);
      setTimeout(() => {
        setFormPreview(false);
        history.push('/');
      }, autoHideTime + 500);
    } catch (err) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(err);
      }
      setIsRequestError(true);
      setIsSnackOpen(true);
      setIsLoading(false);
    }
  };

  const onPreview = () => {
    setFormPreview(true);
    const formFields = getValues({ nest: true });
    setFormFields(formFields);
    history.push('/suggest-form/product-preview');
  };

  const validateImageLink = () => {
    const pattern = /^https?:\/{2}[\d\w/.-]{7,}/;

    if (pattern.test(galleryInput)) {
      setGallery([galleryInput, ...savedGallery]);
    }

    setGalleryInput('');
  };

  const handleDeleteImage = (id) => {
    const modGallery = [...savedGallery];
    modGallery.splice(id, 1);
    setGallery(modGallery);
  };

  const handlePageClose = () => {
    history.push('/');
    setFormPreview(false);
    setGallery([]);
  };

  const handleChange = ({ target }) => {
    setGalleryInput(target.value);
  };

  const renderField = (field) => (
    <TextField
      required
      key={field.label}
      margin="normal"
      disabled={isLoading}
      inputRef={register}
      {...field}
    />
  );

  const fields = {
    main: [
      {
        name: 'prodName',
        label: 'Product Name',
        className: classes.formTopItem,
      },
      {
        name: 'prodUrl',
        label: 'Product Site',
        helperText: 'Add origin site URL',
        className: classes.formTopItem,
      },
      {
        name: 'headImg',
        label: 'Main Image',
        placeholder: 'Paste URL',
        helperText: 'Add image that clearly shows the product is',
        className: classes.formTopItem,
      },
    ],
    description: [
      {
        name: 'shortDescription',
        label: 'Short Description',
        placeholder: '250 symbols max',
        helperText: 'Will be available in product preview',
        inputProps: { maxLength: 250 },
        multiline: true,
      },
      {
        name: 'fullDescription',
        label: 'Full Description',
        helperText: 'Provide full description here',
        multiline: true,
      },
    ],
  };

  const fieldNodes = {
    main: fields.main.map(renderField),
    description: fields.description.map(renderField),
  };

  return (
    <div className={classes.root}>
      <div className={classes.containerTopSection}>
        <button type="button" className={classes.closeBtn} onClick={handlePageClose}>
          <IoIosArrowRoundBack htmlFor={classes.closeBtn} />
        </button>
        <p className={classes.leadText}>
          Place where you can suggest interesting and good quality products of small or less popular
          companies to share with other people and get to know about it more range of pepople
        </p>
      </div>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.mainData}>
          <h2>Main Data</h2>
          <div className={classes.mainDataTopSection}>{fieldNodes.main}</div>
          {fieldNodes.description}
        </div>
        <div className={classes.gallery}>
          <h2>Image Gallery</h2>
          <p>
            Additional images to show more about product. Recomend to paste image url directly from
            the product site or other high quality site
          </p>
          <TextField
            label="Gallery Image"
            placeholder="Paste URL"
            margin="normal"
            disabled={isLoading}
            value={galleryInput}
            onChange={handleChange}
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
          <SuggestedImagesPreview images={savedGallery} deleteAction={handleDeleteImage} />
        </div>
        <div className={classes.formBottomSection}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
              className={classes.submitBtn}
            >
              Submit
            </Button>
          )}
          <Button
            variant="text"
            color="primary"
            disabled={isLoading}
            onClick={onPreview}
            className={classes.previewBtn}
          >
            Show Preview
          </Button>
        </div>
      </form>
      <Snackbar
        open={isSnackOpen}
        autoHideDuration={autoHideTime}
        onClose={() => setIsSnackOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <MuiAlert
          onClose={() => setIsSnackOpen(false)}
          severity={isRequestError ? 'error' : 'success'}
          variant="filled"
          elevation={6}
        >
          {isRequestError
            ? 'Request is failed, please try again'
            : 'Suggestion is successfully submited'}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFormPreview: state.form.isFormPreview,
  savedFields: state.form.formFields,
  savedGallery: state.form.previewGallery,
});

const mapDispatchToProps = (dispatch) => ({
  setFormFields: (formFields) => dispatch(setFormFieldsAction(formFields)),
  setFormPreview: (status) => dispatch(setFormPreviewAction(status)),
  setGallery: (images) => dispatch(setGalleryAction(images)),
});

SuggestProductPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  savedFields: PropTypes.shape({
    prodName: PropTypes.string,
    prodUrl: PropTypes.string,
    headImg: PropTypes.string,
    shortDescription: PropTypes.string,
    fullDescription: PropTypes.string,
  }).isRequired,
  savedGallery: PropTypes.arrayOf(PropTypes.string),
  isFormPreview: PropTypes.bool.isRequired,
  setFormFields: PropTypes.func.isRequired,
  setFormPreview: PropTypes.func.isRequired,
  setGallery: PropTypes.func.isRequired,
};

SuggestProductPage.defaultProps = {
  savedGallery: [],
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SuggestProductPage);
