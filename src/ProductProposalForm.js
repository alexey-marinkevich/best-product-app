import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import ImageGallery from './ImageGallery';

const ProductProposalForm = () => {
  const [productName, setProductName] = useState('');
  const [productHeadImage, setProductHeadImage] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [imageGalleryInput, setImageGalleryInput] = useState('');
  const [imageGallery, setImageGallery] = useState([
    'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_Gray_Loft_600x.jpg?v=1557771826',
    'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_Gray_Stairs_600x.jpg?v=1556563189',
  ]);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleAddImage = e => {
    e.preventDefault();
    if (imageGalleryInput !== '') {
      setImageGallery([...imageGallery, imageGalleryInput]);
      setImageGalleryInput('');
    }
  };

  const handleDeleteImage = e => {
    const selectedElementId = e.target.id;
    imageGallery.splice(selectedElementId, 1);
    setImageGallery(imageGallery);
  };

  return (
    <Container>
      <ContainerTopSection>
        <Link to="/">
          <CloseButton>🠐</CloseButton>
        </Link>
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
              onChange={({ target }) => setProductName(target.value)}
            />
            <TextField
              required
              label="Main Image"
              value={productHeadImage}
              margin="normal"
              placeholder="Paste URL"
              helperText="Add image that clearly shows the product is"
              onChange={({ target }) => setProductHeadImage(target.value)}
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
            onChange={({ target }) => setShortDescription(target.value)}
          />
          <TextField
            required
            multiline
            label="Full Description"
            value={fullDescription}
            margin="normal"
            helperText="Provide full description here"
            onChange={({ target }) => setFullDescription(target.value)}
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
            onChange={({ target }) => setImageGalleryInput(target.value)}
          />
          <Button onClick={handleAddImage}>Add</Button>
          <StyledImageGallery>
            {imageGallery.map((image, idx) => (
              <ImageWrapper>
                <img src={image} key={idx} id={idx} onClick={handleDeleteImage} />
              </ImageWrapper>
            ))}
          </StyledImageGallery>
        </Gallery>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default ProductProposalForm;

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
  padding: 25px 0;
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
