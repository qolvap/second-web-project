import React from "react";
import categoriesItems from "./categoriesItems";
import { Link, useParams } from "react-router-dom";
import "./styles/Product.css";

function ProductPage({ cartItems, setCartItems }) {
  function addToCart() {
    if (count > 0) {
      const cartItem = {
        id: product.id,
        name: product.name,
        type: product.type,
        price: product.price,
        quantity: count
      };
  
      setCartItems(prevItems => [...prevItems, cartItem]);
    }
  }
  
  const [count, setCount] = React.useState(1);

  function add() {
    setCount(prevCount => prevCount + 1);
  }

  function subtract() {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  }

  const calcPrice = (prevCount, productPrice) => {
    return prevCount * productPrice;
  };

  let { id } = useParams();
  const product = categoriesItems.find(item => item.id === parseInt(id));

  return (
    <>
      <div className="product--container">
        <div className="container">
          <div className="products--items">
            {product && (
              <div key={product.id} className="productCard">
                <div className="product--left--side">
                  <div className="product-header">
                    <h2>{product.name}</h2>
                  </div>
                </div>
                <div className="product--right--side">
                  <div className="product-details">
                    <p className="item--describtion">{product.type}</p>
                    <p className="item-price">{product.price}€</p>
                  </div>
                  <div className="counter">
                    <button className="counter--minus" onClick={subtract}>
                      -
                    </button>
                    <div className="counter--count">
                      <h1 className="count--number">{count}</h1>
                    </div>
                    <button className="counter--plus" onClick={add}>
                      +
                    </button>
                    <h1>Total: {calcPrice(count, product.price)} €</h1>
                  </div>
                    <Link to="/basket" className="add--to--card" onClick={addToCart}>
                    Add to cart
                    </Link>
                </div>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;


