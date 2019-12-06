import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  const Images = images.map((img) => <img src={img} key={img} alt="Product Gallery Item" />);

  return (
    <Wrapper>
      {Images}
    </Wrapper>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: overlay;
  align-items: baseline;
  img {
    margin: 0 30px 25px 0;
    max-height: 700px;
    width: auto;
    -webkit-user-drag: none;

    :last-child {
      margin-right: 0;
    }
  }
  ::-webkit-scrollbar {
    height: 0.5em;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 50px;
    margin: 5px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
`;
