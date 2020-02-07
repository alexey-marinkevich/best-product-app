import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import ProductDetailsPage from './ProductDetailsPage';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

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
// todo: make sure setted propTypes all around
const mapStateToProps = state => state.form;

// PreviewProductPage.propTypes = {
//   formFields: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps)(PreviewProductPage);
