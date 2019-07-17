import React from 'react';
import styled from 'styled-components';

import Header from './Header'
import ProductItems from './ProductItems';

function App() {
  return (
    <div className="App">
      <Header/>          
      <div className="content">
        <ProductItems />
      </div>
    </div>
  );
}

export default App;
