import React, { useState } from "react";
import { Link } from "react-router-dom";
import categoriesItems from "./categoriesItems";
import "./styles/Category.css";

function Categories() {
  const [filteredItems, setFilteredItems] = useState(categoriesItems);

  const handleClick = (type , pupularity) => {
    if (type === "All") {
      setFilteredItems(categoriesItems);
    } else if (pupularity === true) {
      const filteredPopular = categoriesItems.filter((item) => item.pupularity === true);
      setFilteredItems(filteredPopular);
    } else {
      const filtered = categoriesItems.filter((item) => item.type === type);
      setFilteredItems(filtered);
    }
  };
  

  return (
    <div className="categories--section">
      <div className="categories--head">
        <a className="back--to--btn" href="/">
          Home
        </a>
        <h1 className="categories--title">Products</h1>
      </div>

      <div className="filter--btns">

          <a className="filter--btn" onClick={() => handleClick("All")}>
          All
        </a>

        <a className="filter--btn" onClick={() => handleClick("pupularity", true)}>
          Popular
        </a>
        <a className="filter--btn" onClick={() => handleClick("abstract")}>
          Abstract
        </a>
        <a className="filter--btn" onClick={() => handleClick("street")}>
          Street
        </a>
        <a className="filter--btn" onClick={() => handleClick("nature")}>
          Nature
        </a>
        
      </div>

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
                  <p className="item-price">{item.price} €</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
          
        </div>
      </div>
    </div>

  );
}

export default Categories;