// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ProductList from './productList';
import Cart from './cart';
import './App.css';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== product.id)
    );
  };

  return (
    <>
    <h1> E - Commerce Website ! (Biswajit Pradhan) </h1>
    <Router>
      <div className='nav'>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productlist">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path="/productlist"
          element={<ProductList addToCart={addToCart} />}
        />
        <Route
            path='/cart'
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
        </Routes>
    </Router>
    </>
  );
}
