import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductProposalForm from './pages/ProductProposalForm';
import FullProductPreviewPage from './pages/FullProductPreviewPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route exact path="/proposal-form" component={ProductProposalForm} />
          <Route path="/proposal-form/product-preview" component={FullProductPreviewPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
