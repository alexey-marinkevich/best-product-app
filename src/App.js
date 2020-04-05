import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  HomePage,
  ProductDetailsPage,
  SuggestProductPage,
  PreviewProductPage,
} from './pages';

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
