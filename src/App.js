import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ProductPage from './ProductPage';
import ProductProposalForm from './ProductProposalForm'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route exact path="/proposal-form" component={ProductProposalForm}/>
      </Switch>
    </div>
  );
}

export default App;
