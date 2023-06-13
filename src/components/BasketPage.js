import React from "react";
import { Link } from "react-router-dom";

function BasketPage({ cartItems }) {
  return (
    <>
      <h1>Your cart:</h1>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h2>{item.name}</h2>
          <p>{item.type}</p>
          <p className="item-price">{item.price * item.quantity}€</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      
      <Link to="/Categories" className="back--to--btn">
        Back to shopping
      </Link>
    </>
  );
}

export default BasketPage;
