import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import ProductPage from '../pages/ProductPage';

const FullProductPreviewPage = ({ form }) => {
  const { prodName, headImg, fullDescription } = form;

  if (!prodName || !headImg || !fullDescription) {
    return <Redirect to="/proposal-form" />;
  }
  return (
    <Container>
      <ProductPage isPreview />
    </Container>
  );
};

const mapStateToProps = state => {
  const { form } = state;
  return {
    form,
  };
};

export default connect(mapStateToProps)(FullProductPreviewPage);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
