import React from "react";
import { Link } from "react-router-dom";

function BasketPage({ cartItems, setCartItems }) {

  function removeFromCart(itemId) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  }

  return (
    <>
        <div className="categories--section">
          <div className="categories--head">
              <h1 className="categories--title">Your cart:</h1>
                  {cartItems.map(item => (
                     <div key={item.id} className="cart-item">
                         <h2 className="shopping--card--name">{item.name}</h2>
                         <p className="shopping--card--describtion">{item.type}</p>
                         <p className="shopping--card--price">{item.price * item.quantity}€</p>
                         <p className="shopping--card--quanity">Quantity: {item.quantity}</p>
                         <button className="shopping--card--remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                     </div>
       
                  ))}
            
        
      
              <Link to="/Categories" className="back--to--btn">
                Back to shopping
              </Link>
          </div>
        </div>
        
    </>
  );
}

export default BasketPage;
