import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Apples', price: 1.5 },
    { id: 2, name: 'Oranges', price: 2.0 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Grocery Ordering App</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} />
    </div>
  );
}

export default App;
