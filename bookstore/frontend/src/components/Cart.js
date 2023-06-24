import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './ShoppingCart.css';
  
export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchCartItems();
  });

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/cart-items/');
      setCartItems(response.data);
      calculateTotalAmount(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleRemoveFromCart = async (bookId) => {
    try {
      const response = await axios.post('http://localhost:8000/api/remove-from-cart/', {
        book_id: bookId,
      });
      console.log(response.data);
      fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuantityChange = async (cartItemId, newQuantity) => {
    try {
      const response = await axios.post('http://localhost:8000/api/update-cart-item/', {
        cart_item_id: cartItemId,
        quantity: newQuantity,
      });
      console.log(response.data);
      fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotalAmount = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.book.price * item.quantity;
    });
    setTotalAmount(total);
  };

  return (
    <form className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.book.id} className="cart-item">
          <div>
            <h4>{item.book.title}</h4>
            <p>Price: ${item.book.price}</p>
          </div>
          <div>
            <button
              className="quantity-btn"
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span className="quantity">{item.quantity}</span>
            <button
              className="quantity-btn"
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button
              className="remove-btn"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <h3>Total Amount: ${totalAmount}</h3>
    </form>
  );
};

