import React from "react";
import categoriesItems from "./categoriesItems";
import { Link } from "react-router-dom";
import "./styles/Product.css"


function ProductPage() {
  return (
    <>
      <div className="prduct--container">
        <div className="container">
          <div className="products--items">
            {categoriesItems.map((item) => (
              <div key={item.id} className="productCard">
                <Link
                  onClick={() =>  window.top(0, 0)}
                  to={`/categories/product/${item.id}`}
                >
                  <div className="product-header">
                    <img src={item.title} alt="product1" />
                  </div>
                  <div className="product-details">
                    <p>{item.description}</p>
                    <p className="item-price">{item.price}$</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;

