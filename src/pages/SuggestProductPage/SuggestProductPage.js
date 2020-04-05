/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Snackbar, Button, CircularProgress } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { IoIosArrowRoundBack } from 'react-icons/io';

import {
  setFormPreviewAction,
  setGalleryAction,
  setIsSnackOpenAction,
  submitFormAction,
  setFlushAction,
} from '../../reducers/formReducer';
import FormMainSection from './FormMainSection';
import ProductImages from './ProductImages';
import LeadText from './LeadText';

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
    padding: '0 30px 30px 30px',
    cursor: 'pointer',
    transition: '0.3s',
    color: '#333',
    [theme.breakpoints.down('xs')]: {
      padding: '0 30px 30px 10px',
    },
    '&:hover': {
      transform: 'translate(-10px, 0)',
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
}));

const propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  isLoading: PropTypes.bool,
  isSnackOpen: PropTypes.bool,
  isRequestError: PropTypes.bool,
  setGallery: PropTypes.func.isRequired,
  setFormPreview: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  setIsSnackOpen: PropTypes.func.isRequired,
  setFlush: PropTypes.func.isRequired,
};

const defaultProps = {
  isLoading: false,
  isSnackOpen: false,
  isRequestError: false,
};

const SuggestProductPage = ({
  history,
  setFormPreview,
  setGallery,
  setFlush,
  isLoading,
  isSnackOpen,
  setIsSnackOpen,
  isRequestError,
  submitForm,
}) => {
  const classes = useStyles();

  const autoHideTime = 2500;

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(history, autoHideTime);
  };

  const onPreview = () => {
    setFormPreview(true);
    history.push('/suggest-form/product-preview');
  };

  const handlePageClose = () => {
    history.push('/');
    setFormPreview(false);
    setFlush();
    setGallery([]);
  };

  return (
    <div className={classes.root}>
      <div className={classes.containerTopSection}>
        <button type="button" className={classes.closeBtn} onClick={handlePageClose}>
          <IoIosArrowRoundBack htmlFor={classes.closeBtn} />
        </button>
        <LeadText />
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.mainData}>
          <h2>Main Data</h2>
          <FormMainSection isLoading={isLoading} />
        </div>
        <div className={classes.gallery}>
          <h2>Image Gallery</h2>
          <p>
            Additional images to show more about product. Recomend to paste image url directly from
            the product site or other high quality site
          </p>
          <ProductImages />
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
  isLoading: state.form.isLoading,
  isSnackOpen: state.form.isSnackOpen,
  isRequestError: state.form.isRequestError,
});

const mapDispatchToProps = (dispatch) => ({
  setFormPreview: (status) => dispatch(setFormPreviewAction(status)),
  setGallery: (data) => dispatch(setGalleryAction(data)),
  setIsSnackOpen: (status) => dispatch(setIsSnackOpenAction(status)),
  submitForm: (history, autoHideTime) => dispatch(submitFormAction(history, autoHideTime)),
  setFlush: () => dispatch(setFlushAction()),
});

SuggestProductPage.propTypes = propTypes;
SuggestProductPage.defaultProps = defaultProps;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SuggestProductPage);
