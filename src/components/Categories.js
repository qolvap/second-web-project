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
        <a className="cat--back--to--home--page" href="/">
          Home
        </a>
        <h1 className="categories--title">Products</h1>
      </div>

      <div className="filter--btns">
      <a href="/Categories" >
      <button className="filter--btn">
          All
          </button>
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
                  <p className="item-price">{item.price}</p>
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