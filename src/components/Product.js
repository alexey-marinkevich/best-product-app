import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Product = ({ id, prodName, headImg, shortDescription }) => {
  return (
    <ItemHeader to={`/product/${id}`}>
      <Description>
        <ProductName>{prodName}</ProductName>
        <ProductDescription>{shortDescription}</ProductDescription>
      </Description>
      <ProductImage img={headImg} />
      <Button>
        <span>Get More</span>
      </Button>
    </ItemHeader>
  );
};

export default Product;

const ItemHeader = styled(Link)`
  display: flex;
  text-decoration: none;
  width: 100%;
  height: 400px;
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
          transform: translate(-88px,-8px);
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
        transform: translate(0,-8px);
        word-break: keep-all;
      }
    }
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 300px;
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
  width: 190px;
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

  &:hover {
    color: #000;
    & span {
      transform: translate(88px,-8px);
      transition: transform .3s;
    }
    ::after {
      left: 70px;
    }
  }

  & span {
    transform: translate(0, -8px);
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

  ${ItemHeader}:hover & {
    transform: translate(0, 0);
  }
}
`;
