import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import {
  updateFormFieldAction,
  flushFieldsAction,
  suggestProductAction,
} from '../reducers/formReducer';
import SuggestedImagesPreview from '../components/SuggestedImagesPreview';

const SuggestProductPage = ({
  updateFormField,
  suggestProduct,
  prodName,
  headImg,
  shortDescription,
  fullDescription,
  gallery,
  flushFields,
  isLoading,
  imageGalleryInput,
  error,
  history,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    suggestProduct();
  };

  const handleAddImage = e => {
    e.preventDefault();
    if (imageGalleryInput !== '') {
      updateFormField('gallery', [imageGalleryInput, ...gallery]);
      updateFormField('imageGalleryInput', '');
    }
  };

  const handleDeleteImage = id => {
    const modGallery = [...gallery];
    modGallery.splice(id, 1);
    updateFormField('gallery', modGallery);
  };

  const handlePageClose = () => {
    flushFields();
    history.push('/');
  };

  const handleShowPreview = () => {
    history.push('/suggest-form/product-preview');
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
              value={prodName}
              margin="normal"
              onChange={({ target }) => updateFormField('prodName', target.value)}
              disabled={isLoading}
            />
            <TextField
              required
              label="Main Image"
              value={headImg}
              margin="normal"
              placeholder="Paste URL"
              helperText="Add image that clearly shows the product is"
              onChange={({ target }) => updateFormField('headImg', target.value)}
              disabled={isLoading}
            />
          </MainDataTopSection>
          <TextField
            required
            multiline
            label="Short Description"
            value={shortDescription}
            margin="normal"
            placeholder="150 symbols max"
            helperText="Will be available in product preview"
            inputProps={{
              maxLength: 150,
            }}
            onChange={({ target }) => updateFormField('shortDescription', target.value)}
            disabled={isLoading}
          />
          <TextField
            required
            multiline
            label="Full Description"
            value={fullDescription}
            margin="normal"
            helperText="Provide full description here"
            onChange={({ target }) => updateFormField('fullDescription', target.value)}
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
            onChange={({ target }) => updateFormField('imageGalleryInput', target.value)}
            disabled={isLoading}
          />
          <Button onClick={handleAddImage} disabled={isLoading}>
            Add
          </Button>
          <SuggestedImagesPreview images={gallery} deleteAction={handleDeleteImage} />
        </Gallery>
        {!!error && <div style={{ color: 'red' }}>{error}</div>}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>

        <Button onClick={handleShowPreview} disabled={isLoading}>
          Show Preview
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = state => {
  return state.form;
};

const mapDispatchToProps = dispatch => {
  return {
    updateFormField: (fieldName, value) => dispatch(updateFormFieldAction(fieldName, value)),
    flushFields: () => dispatch(flushFieldsAction()),
    suggestProduct: () => dispatch(suggestProductAction()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SuggestProductPage);

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
