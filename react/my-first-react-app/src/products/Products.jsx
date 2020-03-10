import React from 'react';
import "./Products.css";
import ProductList from "../product-list/ProductList";
import { PRODUCTS } from "../mock-products";

function Products() {
    return (
        <div className="wrapper">
            <h1>Products</h1>
            <ProductList products={PRODUCTS} />
        </div>
    );
}

export default Products;