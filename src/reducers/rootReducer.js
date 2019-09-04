const initState = {
  currentItem: null,
  products: [
    {
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

export const rootReducer = (state = initState, {type, payload}) => {
  switch(type) {
    case 'SET_CURRENT_ITEM':
      return {
        ...state,
        currentItem: payload,
      };
  
    default:
      return state;
  }
};
