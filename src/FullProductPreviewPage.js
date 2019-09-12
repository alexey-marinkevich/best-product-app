import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import styled from 'styled-components'

import ProductItem from './ProductItem';
import ProductPage from './ProductPage';

const FullProductPreviewPage = ({ form }) => {
  const { productName, productHeadImage, shortDescription, fullDescription } = form;

  if (!productName || !productHeadImage || !shortDescription || !fullDescription) {
    return <Redirect to="/proposal-form" />;
  }
  return (
    <Container>
      <ProductItemWrapper>
        <h2>HOME PAGE VIEW</h2>
        <ProductItem
          isPreview
          prodName={productName}
          headImg={productHeadImage}
          shortDescription={shortDescription}
        />
      </ProductItemWrapper>
      <ProductPageWrapper>
        <h2>FULL PRODUCT PAGE VIEW</h2>
        <ProductPage isPreview />
      </ProductPageWrapper>
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
`

const ProductItemWrapper = styled.div`

`
const ProductPageWrapper = styled.div`
  padding: 50px 0;
`