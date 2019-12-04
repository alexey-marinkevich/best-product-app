import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SuggestProductPage from './pages/SuggestProductPage';
import ProductPreviewPage from './pages/ProductPreviewPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route exact path="/proposal-form" component={SuggestProductPage} />
          <Route path="/proposal-form/product-preview" component={ProductPreviewPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
