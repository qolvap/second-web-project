import React from "react";
import { Link } from "react-router-dom";
import BasketPage from "./BasketPage";

function Card({ cartItems, setCartItems }) {
  const isEmpty = cartItems.length === 0;

  if (isEmpty) {
    return (
      <div className="categories--section--empty">
      <div className="categories--head--empty">
        <h1 className="categories--title">Ups...Your cart is empty</h1>
        <Link className="back--to--shop" to="/Categories">
          Keep browsing
        </Link>
      </div>
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
