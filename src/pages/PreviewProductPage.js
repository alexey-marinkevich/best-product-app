import React from 'react';
import PropTypes from 'prop-types';
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

const PreviewProductPage = ({ prodName, headImg, fullDescription }) => {
  const classes = useStyles();

  if (!prodName || !headImg || !fullDescription) {
    return <Redirect to="/suggest-form" />;
  }
  
  return (
    <div className={classes.root}>
      <ProductDetailsPage isPreview />
    </div>
  );
};

const mapStateToProps = (state) => state.form;

PreviewProductPage.propTypes = {
  prodName: PropTypes.string.isRequired,
  headImg: PropTypes.string.isRequired,
  fullDescription: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PreviewProductPage);
