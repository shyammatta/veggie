import React from 'react';
import Navbar from "../components/NavBar";


function Cart({ cartItems }) {
  return (
    <div>
                    <Navbar />

      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name} - {item.weight}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;