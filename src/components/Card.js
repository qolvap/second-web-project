import React from "react";
import { Link } from "react-router-dom";
import BasketPage from "./BasketPage";

function Card({ cartItems, setCartItems }) {
  const isEmpty = cartItems.length === 0;

  if (isEmpty) {
    return (
      <div className="categories--section">
        <h1>Ups...Your cart is empty</h1>
        <Link className="banner--btn" to="/Categories">
          Keep browsing
        </Link>
      </div>
    );
  } else {
    return (
        <>
        <BasketPage cartItems={cartItems} setCartItems={setCartItems} />
      </>
    );
  }
}

export default Card;
