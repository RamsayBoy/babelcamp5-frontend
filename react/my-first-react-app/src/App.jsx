import React from 'react';
import Header from './header/Header';
import './App.css';
import ProductList from './product-list/ProductList';
import { PRODUCTS } from './mock-products';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductList products={PRODUCTS}/>
    </div>
  );
}

export default App;