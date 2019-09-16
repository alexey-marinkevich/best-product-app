import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import { updateFormField, submitForm, flushFields } from './reducers/formReducer';

import ImageGallery from './ImageGallery';

const ProductProposalForm = ({
  updateField,
  productName,
  productHeadImage,
  shortDescription,
  fullDescription,
  gallery,
  submit,
  flush,
  isLoading,
  imageGalleryInput,
  error,
  history
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    submit();
  };

  const handleAddImage = e => {
    e.preventDefault();
    if (imageGalleryInput !== '') {
      updateField('gallery', [...gallery, imageGalleryInput]);
      updateField('imageGalleryInput', '');
    }
  };

  const handleDeleteImage = id => {
    const modGallery = [...gallery];
    modGallery.splice(id, 1);
    updateField('gallery', modGallery);
  };

  const handlePageClose = () => { 
    flush();
    history.push('/');
  };

  const handleShowPreview = () => {
    history.push('/proposal-form/product-preview')
  };

  return (
    <Container>
      <ContainerTopSection>
        <CloseButton onClick={handlePageClose}>🠐</CloseButton>
        <LeadText>
          Place where you can suggest interest and good quality products of small or less popular
          companies to share with other people and get to know about it more range of pepople
        </LeadText>
      </ContainerTopSection>
      <Form onSubmit={handleSubmit}>
        <MainData>
          <h2>Main Data</h2>
          <MainDataTopSection>
            <TextField
              required
              label="Product Name"
              value={productName}
              margin="normal"
              onChange={({ target }) => updateField('productName', target.value)}
              disabled={isLoading}
            />
            <TextField
              required
              label="Main Image"
              value={productHeadImage}
              margin="normal"
              placeholder="Paste URL"
              helperText="Add image that clearly shows the product is"
              onChange={({ target }) => updateField('productHeadImage', target.value)}
              disabled={isLoading}
            />
          </MainDataTopSection>
          <TextField
            required
            multiline
            label="Short Description"
            value={shortDescription}
            margin="normal"
            placeholder="100 symbols max"
            helperText="Will be available in product preview"
            inputProps={{
              maxLength: 100,
            }}
            onChange={({ target }) => updateField('shortDescription', target.value)}
            disabled={isLoading}
          />
          <TextField
            required
            multiline
            label="Full Description"
            value={fullDescription}
            margin="normal"
            helperText="Provide full description here"
            onChange={({ target }) => updateField('fullDescription', target.value)}
            disabled={isLoading}
          />
        </MainData>
        <Gallery>
          <h2>Image Gallery</h2>
          <p>
            Additional images to show more about product. Recomend to paste image url directly from
            the product site or other high quality site
          </p>
          <TextField
            label="Gallery Image"
            value={imageGalleryInput}
            placeholder="Paste URL"
            margin="normal"
            helperText=""
            onChange={({ target }) => updateField('imageGalleryInput', target.value)}
            disabled={isLoading}
          />
          <Button onClick={handleAddImage} disabled={isLoading}>Add</Button>
          <StyledImageGallery>
            {gallery.map((image, idx) => (
              <ImageWrapper onClick={() => handleDeleteImage(idx)}>
                <img src={image} key={idx} />
              </ImageWrapper>
            ))}
          </StyledImageGallery>
        </Gallery>
        {!!error && <div style={{ color: 'red' }}>{error}</div>}
        <Button type="submit" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit'}</Button>
        
        <Button onClick={handleShowPreview} disabled={isLoading}>Show Preview</Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = state => {
  return state.form;
};

const mapDispatchToProps = dispatch => {
  return {
    updateField: (fieldName, value) => dispatch(updateFormField(fieldName, value)),
    submit: () => dispatch(submitForm()),
    flush: () => dispatch(flushFields()),
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(ProductProposalForm);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  max-width: 1280px;
  margin: 0 auto;

  & h2 {
    font-size: 35px;
    margin: 0;
  }
`;

const ContainerTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CloseButton = styled.button`
  font-size: 60px;
  background: none;
  border: none;
  outline: none;
  padding: 0 30px 30px 30px;
  cursor: pointer;
  transition: 0.3s;
  color: #333

  :hover {
    transform: translate(-10px, 0);
  }
`;

const LeadText = styled.h1`
  font-size: 20px;
  color: #333;
  width: 100%;
  font-weight: normal;
  width: 500px;
  text-align: right;
  position: relative;
  align-self: flex-end;
  margin-right: 120px;

  :before {
    content: 'Suggest product';
    font-size: 95px;
    font-weight: 900;
    position: absolute;
    writing-mode: vertical-lr;
    white-space: nowrap;
    top: 0;
    right: -120px;
  }
`;
const Form = styled.form`
  display: flex;
  width: 70%;
  max-width: 800px;
  flex-direction: column;
`;

const MainData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 50px;
`;

const MainDataTopSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 50px;
  margin-bottom: 30px;

  & p {
    margin: 0;
    max-width: 400px;
    font-size: 14px;
  }
`;

const StyledImageGallery = styled(ImageGallery)`
  padding: 25px 0 0 0;
  & img {
    max-height: 200px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-right: 25px;
  cursor: pointer;

  &:last-child {
    margin-right: 0px;
  }

  &::after {
    content: 'Remove';
    opacity: 0;
    font-size: 25px;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -100%);
    text-shadow: 1px 1px #808080, 1px 0px #808080, 0px 0 #808080, -1px 1px #808080;
    transition: 0.3s;
    -webkit-user-select: none;
  }
  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;

const Button = styled.button`
  width: 250px;
  height: 50px;
  background-color: transparent;
  border: 1px solid #333;
  color: #333;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;

  : hover {
    background-color: #333;
    color: #fff;
  }
`;
