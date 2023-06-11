import React from "react";
import categoriesItems from "./categoriesItems";
import { Link, useParams } from "react-router-dom";
import "./styles/Product.css"


function ProductPage() {
  let {id} = useParams()
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
                       <p>{product.type}</p>
                       <p className="item-price">{product.price}</p>
                     </div>
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

