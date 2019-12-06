import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SuggestedImagesPreview = ({ images, deleteAction }) => {
  const Images = images.map((img, id) => (
    <DeleteLayer onClick={() => deleteAction(id)} key={img}>
      <img src={img} alt="Gallery item" />
    </DeleteLayer>
  ));
  return <Wrapper>{Images}</Wrapper>;
};

SuggestedImagesPreview.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default SuggestedImagesPreview;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 0 0 0;
  overflow: overlay;
  align-items: baseline;
  img {
    margin: 0 30px 25px 0;
    max-height: 200px;
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

const DeleteLayer = styled.div`
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
