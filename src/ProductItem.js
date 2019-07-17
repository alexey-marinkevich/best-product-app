import React, { Component } from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  &: hover {
    cursor: pointer;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 20px;
  background-color: #fff;
`;

const ProductName = styled.h2`
  font-size: 42px;
  color: #333;
  margin: 0;
`;

const ProductDescription = styled.p`
  font-size: 18px;
  color: #333;
`;

const ProductImage = styled.div`
  width: 100%;
  background-image: url('https://cdn2.shopify.com/s/files/1/0231/2060/9358/files/Home_Packaging_1024x.jpg?v=1556841297');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: scale(1);
  transition: transform 5s, filter 1s;
  z-index: -100;

  ${ItemContainer}:hover & {
    transform: scale(1.3);
    transition: transform 15s, filter 1s;
    filter: brightness(0.8);
  }
`;

const Button = styled.button`
  position: absolute;
  right: 25px;
  bottom: 25px;
  width: 200px;
  height: 50px;
  padding: 15px;
  background: none;
  border: 2px solid white;
  color: #fff;
  font-size: 18px;
  text-align: left;
  overflow: hidden;
  cursor: pointer;
  transform: translate(0, 75px);
  transition: border-bottom-width .3s, transform .5s, color .3s;
  &:hover {
    color: #333;
    ::after {
      right: -10px;
    }
  }
  ${ItemContainer}:hover & {
    transform: translate(0, 0);
  }

  &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 220px;
    top: -55px;
    right: -111px;
    background-color: #fff;
    transform: rotate(45deg);
    transition: right .3s;
  }
}
`;

class ProductItem extends Component {
  render() {
    return (
      <ItemContainer>
        <Description>
          <ProductName>Atoms Shoes</ProductName>
          <ProductDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore,
            mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores
            numquam neque
          </ProductDescription>
        </Description>
        <ProductImage />
        <Button>Visit Site</Button>
      </ItemContainer>
    );
  }
}

export default ProductItem;
