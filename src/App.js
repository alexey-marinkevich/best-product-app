import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Loader from './components/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const SuggestProductPage = lazy(() => import('./pages/SuggestProductPage/SuggestProductPage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage/ProductDetailsPage'));
const PreviewProductPage = lazy(() => import('./pages/PreviewProductPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:id" component={ProductDetailsPage} />
          <Route exact path="/suggest-form" component={SuggestProductPage} />
          <Route path="/suggest-form/product-preview" component={PreviewProductPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
