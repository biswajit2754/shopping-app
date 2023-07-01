import React from 'react';
import './cart.css';

export default function Cart({ cartItems, removeFromCart }) {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price;
    }
    return totalPrice.toFixed(2);
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div className='container'>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>There was no Item aveilable in your Cart.</p>
      ) : (
        <div>
          <h3>Selected Products:</h3>
          {cartItems.map((item) => (
            <div className='cart-item' key={item.id}>
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleRemoveFromCart(item)}>
                Remove
              </button>
            </div>
          ))}
          <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
}
