// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems }) => (
  <div>
    <h2>Cart</h2>
    {cartItems.length === 0 && <p>No items in cart</p>}
    {cartItems.map((item, index) => (
      <div key={index}>
        <span>{item.name} - ${item.price}</span>
      </div>
    ))}
  </div>
);

export default Cart;
