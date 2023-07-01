// ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './productList.css';

export default function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className='container'>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
      <div className="center-screen">
      <Link to="/cart" className="centered-link">View Cart</Link>
      </div>
    </div>
  );
}
