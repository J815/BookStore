import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../index.css';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  
export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);


  const fetchCartItems = useCallback(async()  => {
    try {
      const response = await axios.get('http://localhost:8000/api/cart-items/');
      setCartItems(response.data);
      calculateTotalAmount(response.data);
    } catch (error) {
      console.error(error);
    }
  },[]);
  useEffect(() => {
    fetchCartItems();
  },[fetchCartItems]);

  

  const handleRemoveFromCart = async (itemId,event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:8000/api/remove-from-cart/${itemId}/`);
      fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuantityChange = async (cartItemId, newQuantity,event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/api/cart-items/${cartItemId}/`, {
        cart_item_id: cartItemId,
        quantity: newQuantity,
      });
      console.log(response.data);
      fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckout = async (event) => {
    event.preventDefault();
    try {
      await axios.delete('http://localhost:8000/api/clear-cart/');
      fetchCartItems(); // Refetch cart items after successful deletion
    } catch (error) {
      console.error(error);
    }
  };
  const renderCheckoutButton = () => {
    if (cartItems.length === 0) {
      return null; // Hide the button if cart is empty
    }

    return <div><h3>Total Amount: ${totalAmount}</h3><button className="quantity-btn" onClick={(e) => handleCheckout(e)}>Checkout</button></div>;
  };


  const calculateTotalAmount = (items) => {
    let total = 0;
    items?.forEach((item) => {
      total += item.book.price * item.quantity;
    });
    setTotalAmount(total);
  };

  return (
    <form className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems?.map((item) => (
        <div key={item.book.id} className="cart-item">
          <div>
            <h4>{item.book.title}</h4>
            <p>Price: ${item.book.price}</p>
          </div>
          <div>
            <button
              className="quantity-btn"
              onClick={(e) => handleQuantityChange(item.id, item.quantity - 1,e)}
            >
              -
            </button>
            <span className="quantity">{item.quantity}</span>
            <button
              className="quantity-btn"
              onClick={(e) => handleQuantityChange(item.id, item.quantity + 1,e)}
            >
              +
            </button>
            <button
              className="remove-btn"
              onClick={(e) => handleRemoveFromCart(item.id,e)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {renderCheckoutButton()}
    </form>
  );
};

