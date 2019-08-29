import React from 'react';
import styled from 'styled-components';

import ProductPage from './ProductPage';

const ProductItem = ({
  idx,
  prodName,
  headImg,
  shortDescription,
  fullDescription,
  siteUrl,
  gallery,
  isItemActive,
  renderContent,
}) => {
  const renderImg = gallery.map(img => {
    return <img src={img} />;
  });

  const handleClose = () => {
    renderContent(idx);
  };

  if (!isItemActive) {
    return (
      <ItemHeader onClick={handleClose}>
        <Description>
          <ProductName>{prodName}</ProductName>
          <ProductDescription>{shortDescription}</ProductDescription>
        </Description>
        <ProductImage img={headImg} />
        <a href={siteUrl} target="_blank">
          <Button>
            <span>Get More</span>
          </Button>
        </a>
      </ItemHeader>
    );
  }
  return (
    <ProductPage
      headImg={headImg}
      fullDescription={fullDescription}
      prodName={prodName}
      renderImg={renderImg}
      handleClose={handleClose}
    />
  );
};

export default ProductItem;

const ItemHeader = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  &: hover {
    cursor: pointer;
  }
  
  :nth-child(even) {
    flex-direction: row-reverse;
    & button {
      right: 0;
      left: 25px;
      text-align: right;
      &:hover {
        ::after {
          left: -25px;
        }
        & span {
          transform: translate(-95px,-10px);
        }
      }
      &::after {
        top: -145px;
        left: -205px
        transform: rotate(45deg);
        transition: left .3s;
      }
      & span {
        position: absolute;
        right: 17px;
        transform: translate(0,-9px);
        word-break: keep-all;
      }
    }
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 20px;
  background-color: #fff;
`;

const ProductName = styled.h2`
  font-size: 32px;
  color: #333;
  margin: 0;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: #333;
`;

const ProductImage = styled.div`
  width: 100%;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: scale(1);
  transition: transform 10s, filter 1s;
  z-index: -100;

  ${ItemHeader}:hover & {
    transform: scale(1.1);
    transition: transform 10s, filter 1s;
    filter: brightness(0.8);
  }
`;

const Button = styled.button`
  position: absolute;
  right: 25px;
  bottom: 20px;
  width: 200px;
  height: 40px;
  padding: 15px;
  background: none;
  border: 2px solid white;
  color: #fff;
  font-size: 16px;
  text-align: left;
  overflow: hidden;
  cursor: pointer;
  transform: translate(0, 75px);
  transition: border-bottom-width .3s, transform .5s, color .3s;

  & span {
    transform: translate(0, -9px);
    position: absolute;
    transition: transform .3s;
  }

  &::after {
    content: '';
    position: absolute;
    width: 180px;
    height: 220px;
    top: -145px;
    left: 230px;
    background-color: #fff;
    transform: rotate(45deg);
    transition: .3s;
    z-index: -100;
  }

  &:hover {
    color: #000;
    & span {
      transform: translate(95px, -9px);
      transition: transform .3s;
    }
    ::after {
      left: 70px;
    }
  }

  ${ItemHeader}:hover & {
    transform: translate(0, 0);
  }
}
`;
