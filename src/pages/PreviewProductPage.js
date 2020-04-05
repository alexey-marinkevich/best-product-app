import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import ProductDetailsPage from './ProductDetailsPage/ProductDetailsPage';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const propTypes = {
  formFields: PropTypes.shape({
    prodName: PropTypes.string,
    prodUrl: PropTypes.string,
    headImg: PropTypes.string,
    shortDescription: PropTypes.string,
    fullDescription: PropTypes.string,
  }).isRequired,
};

const PreviewProductPage = ({ formFields }) => {
  const classes = useStyles();

  if (!formFields) {
    return <Redirect to="/suggest-form" />;
  }

  return (
    <div className={classes.root}>
      <ProductDetailsPage isPreview />
    </div>
  );
};
const mapStateToProps = (state) => state.form;

PreviewProductPage.propTypes = propTypes;

export default connect(mapStateToProps)(PreviewProductPage);
