import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import SuggestProductPage from './pages/SuggestProductPage';
import PreviewProductPage from './pages/PreviewProductPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:id" component={ProductDetailsPage} />
        <Route exact path="/suggest-form" component={SuggestProductPage} />
        <Route path="/suggest-form/product-preview" component={PreviewProductPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
