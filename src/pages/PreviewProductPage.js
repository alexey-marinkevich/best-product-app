import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import ProductDetailsPage from './ProductDetailsPage';

const PreviewProductPage = ({ form }) => {
  const { prodName, headImg, fullDescription } = form;

  if (!prodName || !headImg || !fullDescription) {
    return <Redirect to="/suggest-form" />;
  }
  return (
    <Container>
      <ProductDetailsPage isPreview />
    </Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
