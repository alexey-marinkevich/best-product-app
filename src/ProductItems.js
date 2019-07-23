import React, { Component } from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';

class ProductItems extends Component {
  state = {
    products: [
      {
        id: 123,
        isItemActive: false,
        prodName: 'Atoms shoes',
        headImg:
          'https://cdn2.shopify.com/s/files/1/0231/2060/9358/files/Home_Packaging_1024x.jpg?v=1556841297',
        shortDescription:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque',
        fullDescription:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque',
        siteUrl: 'https://atoms.com/',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_BW_Closeup_1024x.jpg?v=1556563118',
          'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_Gray_Loft_600x.jpg?v=1557771826',
          'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_White_Wide_1024x.jpg?v=1556563138',
        ],
      },
      {
        id: 123,
        isItemActive: false,
        prodName: 'Atoms shoes',
        headImg:
          'https://cdn2.shopify.com/s/files/1/0231/2060/9358/files/Home_Packaging_1024x.jpg?v=1556841297',
        shortDescription:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque',
        fullDescription:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque',
        siteUrl: 'https://atoms.com/',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_BW_Closeup_1024x.jpg?v=1556563118',
          'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_Gray_Loft_600x.jpg?v=1557771826',
          'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_White_Wide_1024x.jpg?v=1556563138',
        ],
      },
      {
        id: 123,
        isItemActive: false,
        prodName: 'Atoms shoes',
        headImg:
          'https://cdn2.shopify.com/s/files/1/0231/2060/9358/files/Home_Packaging_1024x.jpg?v=1556841297',
        shortDescription:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque',
        fullDescription:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque',
        siteUrl: 'https://atoms.com/',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_BW_Closeup_1024x.jpg?v=1556563118',
          'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_Gray_Loft_600x.jpg?v=1557771826',
          'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_White_Wide_1024x.jpg?v=1556563138',
        ],
      },
      
    ],
  };

  renderContent = (idx) => {
    this.setState(({products}) => {
      const editableProduct = [...products];
      editableProduct[idx].isItemActive = true; 
      return {
        products : editableProduct
      }
    })
  };
  
  render() {
    const renderElems = this.state.products.map((product, idx) => {
      return (
        <ProductItem
          idx={idx}
          prodName={product.prodName}
          headImg={product.headImg}
          shortDescription={product.shortDescription}
          fullDescription={product.fullDescription}
          siteUrl={product.siteUrl}
          gallery={product.gallery}
          isItemActive={product.isItemActive}
          renderContent={this.renderContent}
        />
      );
    });
    return <div>{renderElems}</div>;
  }
}

export default ProductItems;
