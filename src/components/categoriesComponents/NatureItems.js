import React from "react";
import { Link } from "react-router-dom";
import categoriesItems from "../categoriesItems";

function NatureItems() {
  const filteredItems = categoriesItems.filter((item) => item.type === "nature");

  return (
    <>
      <div className="all--products">
        <div className="products--items--list">
          <div className="all--items">
            {filteredItems.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="product-link">
              <div key={item.id} className="product">
                <div className="product-header">
                  <span>{item.name}</span>
                </div>
                <div className="product-details">
                <img className="item-img" src={item.picture} alt="img"></img>
                  <p className="item-price">{item.price}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default NatureItems;