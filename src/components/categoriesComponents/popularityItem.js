import React, { useState } from "react";
import { Link } from "react-router-dom";
import categoriesItems from "../categoriesItems";

function PopularityItem(){ 
    const filteredItems = categoriesItems.filter((item) => item.pupularity === true)
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const handleMouseOver = (itemId) => {
      setHoveredItemId(itemId);
    };
  
    const handleMouseOut = () => {
      setHoveredItemId(null);
    };
  
    return (
      <>
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
      </>
    );
  }
  
export default PopularityItem;