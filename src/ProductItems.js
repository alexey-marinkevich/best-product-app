import React, { Component } from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';


class ProductItems extends Component {
  state = {
    products: [
      {
        prodName: "Atoms shoes",
        prodImg: "https://cdn2.shopify.com/s/files/1/0231/2060/9358/files/Home_Packaging_1024x.jpg?v=1556841297",
        shortDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque",
        fullDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque",
        siteUrl: "https://atoms.com/",
      },
      {
        prodName: "Atoms shoes",
        prodImg: "https://cdn2.shopify.com/s/files/1/0231/2060/9358/files/Home_Packaging_1024x.jpg?v=1556841297",
        shortDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque",
        fullDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque",
        siteUrl: "https://atoms.com/",
      },
      {
        prodName: "Atoms shoes",
        prodImg: "https://cdn2.shopify.com/s/files/1/0231/2060/9358/files/Home_Packaging_1024x.jpg?v=1556841297",
        shortDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque",
        fullDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque",
        siteUrl: "https://atoms.com/",
      },
      {
        prodName: "Atoms shoes",
        prodImg: "https://cdn2.shopify.com/s/files/1/0231/2060/9358/files/Home_Packaging_1024x.jpg?v=1556841297",
        shortDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque",
        fullDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque",
        siteUrl: "https://atoms.com/",
      },
      {
        prodName: "Atoms shoes",
        prodImg: "https://cdn2.shopify.com/s/files/1/0231/2060/9358/files/Home_Packaging_1024x.jpg?v=1556841297",
        shortDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque",
        fullDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque",
        siteUrl: "https://atoms.com/",
      },
    ]
  }

  render() {
    const { prodName, prodImg, shortDescription, fullDescription, siteUrl } = this.state;
    const renderElems = this.state.products.map(product=> {
      return (
        <ProductItem prodName={product.prodName} prodImg={product.prodImg} shortDescription={product.shortDescription} siteUrl={product.siteUrl} />
      )
    })
    return (
      <div>
        {renderElems}
      </div>
    );
  }
}

export default ProductItems;