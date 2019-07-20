import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ProductPage from './ProductPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product" component={ProductPage} />
      </Switch>
    </div>
  );
}

export default App;
