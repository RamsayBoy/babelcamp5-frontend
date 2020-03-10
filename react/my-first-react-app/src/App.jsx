import React from 'react';
import Header from './header/Header';
import './App.css';
import Product from './products/Products';
import ShoppingCar from './shopping-car/ShoppingCar';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <switch>
          <Route exact path="/">
            <Product />
          </Route>
          <Route path="/shopping-car">
            <ShoppingCar />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
