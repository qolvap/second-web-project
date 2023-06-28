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
  
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const handleMouseOver = (itemId) => {
    setHoveredItemId(itemId);
  };

  const handleMouseOut = () => {
    setHoveredItemId(null);
  };

  return (
    <div className="categories--section">
      <div className="categories--head">
        

                  <Link className="link" to="/" >
                  <li className="back--to--btn" >Home</li>
                  </Link>
        
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
                <div className="product-details">
                <div
                    onMouseOver={() => handleMouseOver(item.id)}
                    onMouseOut={handleMouseOut}
                  >
                    <img className="item-img" src={item.picture} alt="img"></img>
                  </div>
                  {hoveredItemId === item.id && (
                    <div className="product-header">
                    <h2 className="item-name">{item.name}</h2>
                    <p className="item-price">{item.price} €</p>
                  </div>
                  )}
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