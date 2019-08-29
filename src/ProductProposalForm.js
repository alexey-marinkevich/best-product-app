import React, { Component } from 'react';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

class ProductProposalForm extends Component {
  state = {
    productName: '',
    productHeadImage: '',
    shortDescription: '',
    fullDescription: '',
    galleryField: '',
  };

  handleInput = e => {
    const eventId = e.target.id;
    const value = e.target.value;

    this.setState({
      [eventId]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const {
      productName,
      productHeadImage,
      shortDescription,
      fullDescription,
      galleryField,
    } = this.state;
    
    return (
      <Container>
        <ContainerTopSection>
          <CloseButton>🠐</CloseButton>
          <LeadText>
            Place where you can suggest interest and good quality products of small or less popular
            companies to share with other people and get to know about it more range of pepople
          </LeadText>
        </ContainerTopSection>
        <Form onChange={this.handleInput} onSubmit={this.handleSubmit}>
          <MainData>
            <h2>Main Data</h2>
            <MainDataTopSection>
              <TextField
                required
                id="productName"
                label="Product Name"
                defaultValue={productName}
                margin="normal"
              />
              <TextField
                required
                id="productHeadImage"
                label="Main Image"
                defaultValue={productHeadImage}
                margin="normal"
                placeholder="Paste URL"
                helperText="Add image that clearly shows what the product is"
              />
            </MainDataTopSection>
            <TextField
              required
              multiline
              id="shortDescription"
              label="Short Description"
              defaultValue={shortDescription}
              margin="normal"
              placeholder="100 symbols max"
              helperText="Will be available in product preview"
              inputProps={{
                maxLength: 100,
              }}
            />
            <TextField
              required
              multiline
              id="fullDescription"
              label="Full Description"
              defaultValue={fullDescription}
              margin="normal"
              helperText="Provide full description here"
            />
          </MainData>
          <ImageGallery>
            <h2>Image Gallery</h2>
            <p>
              Additional images to show more about product. Recomend to paste image url from this
              product site or other high quality site
            </p>
            <TextField
              required
              id="galleryField"
              label="Gallery Image"
              defaultValue={galleryField}
              placeholder="Paste URL"
              margin="normal"
              helperText=""
            />
          </ImageGallery>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

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

const ImageGallery = styled.div`
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
