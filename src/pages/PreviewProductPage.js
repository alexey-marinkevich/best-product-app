import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import ProductDetailsPage from './ProductDetailsPage';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const PreviewProductPage = ({ form }) => {
  const { prodName, headImg, fullDescription } = form;
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

const mapStateToProps = (state) => {
  const { form } = state;
  return {
    form,
  };
};

PreviewProductPage.propTypes = {
  form: PropTypes.shape({
    prodName: PropTypes.string,
    headImg: PropTypes.string,
    fullDescription: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(PreviewProductPage);
