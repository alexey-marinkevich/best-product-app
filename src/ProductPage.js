import React from 'react';
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

import styled from 'styled-components';
import ImageGallery from './ImageGallery';

const ProductPage = ({ product, match, formFields, isPreview }) => {
  const currProduct = isPreview ? formFields : product[match.params.id];
  console.log(currProduct)

  if (!currProduct) {
    return 'NOTHING FOUND'
  }

  const renderImg = currProduct.gallery.map(img => {
    return <img src={img} />;
  });

  return (
    <Container>
      <ContentWrapper>
        <ItemHeader>
          <Link to='/'>
            <CloseButton>🠐</CloseButton>
          </Link>
          <ProductImage img={currProduct.productHeadImage} />
        </ItemHeader>
        <Content>
          <p>{currProduct.fullDescription}</p>
        </Content>
        <SideName>
          <h1>{currProduct.productName}</h1>
        </SideName>
      </ContentWrapper>
      <ImageGallery>{renderImg}</ImageGallery>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.products,
    formFields: state.form,
  }
}

export default withRouter(connect(mapStateToProps)(ProductPage));

const Container = styled.div`
  position: relative;
  background-color: #fff;
  z-index: 99999;
  
`;

const ContentWrapper = styled.div`
  position: relative;
`;

const ItemHeader = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 60px;
  background: none;
  border: none;
  outline: none;
  padding: 0 30px 30px 30px;
  cursor: pointer;
  transition: 0.3s;
  color: #fff

  :hover {
    transform: translate(-10px, 0);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: scale(1);
  transition: transform 10s, filter 1s;
  filter: brightness(0.8);
  z-index: -100;
`;

const Content = styled.div`
  display: flex;
  min-height: 300px;
  justify-content: center;
  align-items: center;
  padding: 50px 25px;
  text-align: center;
  margin: 0 auto;
  & p {
    max-width: 600px;
    font-size: 18px;
    background-color: #fff;
    z-index: 100;
  }
`;

const SideName = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  user-select: none;
  right: 50px;
  top: 0;
  max-height: 1000px;
  max-width: 140px;

  h1 {
    writing-mode: vertical-lr;
    font-size: 60px;
    margin: 0;
  }
`;


