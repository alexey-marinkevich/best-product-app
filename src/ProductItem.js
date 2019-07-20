import React from 'react';
import styled from 'styled-components';

const ProductItem = ({ prodName, headImg, shortDescription, fullDescription, siteUrl, gallery }) => {
  const renderImg = gallery.map(img => {
    return (
      <img src={img}/>
    )
  })
  return (
    <div>
      <Wrapper>  
        <ItemHeader>
          <Description>
            <ProductName>{prodName}</ProductName>
            <ProductDescription>{shortDescription}</ProductDescription>
          </Description>
          <ProductImage />
          <a href="{siteUrl}" target="_blank">
            <Button>
              <span>Visit Site</span>
            </Button>
          </a>
        </ItemHeader>
        <Content>
          <p>{fullDescription}</p>
        </Content>
        <SideName>
          <h1>{prodName}</h1>
        </SideName>
      </Wrapper>
      <Gallery>
        {renderImg}
      </Gallery>
      <Footer>
        <p>All rights reserved 2019</p>
      </Footer>
    </div>
      
  );
};

export default ProductItem;

const Wrapper = styled.div`
  position: relative;
`

const ItemHeader = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  &: hover {
    cursor: pointer;
  }
  
  &:nth-child(even) {
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
        transform: translate(0,-10px);
        word-break: keep-all;
      }
    }
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
    left: 225px;
    background-color: #fff;
    transform: rotate(45deg);
    transition: .3s;
    z-index: -100;
  }
}
`;

const Content = styled.div`
  display: flex;
  min-height: 300px;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  text-align: center;
  max-width: 750px;
  margin: 0 auto;
  font-size: 20px;
  background-color: #fff;
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
  right: 50px;
  top: 0;
  max-height: 1000px;


  h1 {
    writing-mode: vertical-lr;
    font-size: 60px;
    margin: 0;
  }

`

const Gallery = styled.div`
  display: flex;
  width: 100%;
  overflow: overlay;
  align-items: baseline;
  img {
    margin: 0 30px 25px 0;
    max-height: 830px;
    width: auto;
    -webkit-user-drag: none;
    
    :last-child {
      margin-right: 0;
    }
  }
  ::-webkit-scrollbar {   
    height: .5em;
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

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 25px;

  p {
    font-size: 20px;
  }
`