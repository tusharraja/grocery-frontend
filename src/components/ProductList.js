// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, addToCart }) => (
  <div>
    <h2>Products</h2>
    {products.map((product) => (
      <div key={product.id}>
        <span>{product.name} - ${product.price}</span>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

export default ProductList;
