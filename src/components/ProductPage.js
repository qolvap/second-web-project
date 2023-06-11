import React from "react";
import categoriesItems from "./categoriesItems";
import { Link, useParams } from "react-router-dom";
import "./styles/Product.css"


function ProductPage() {
  let {id} = useParams()
  const product = categoriesItems.filter(item => item.id === id)
  return (
    <>
      <div className="prduct--container">
        <div className="container">
          <div className="products--items">
            {categoriesItems.map((item) => (
              <div key={item.id} className="productCard">
                <Link to={`/categories/product/${item.id}`}>
                  <div className="product-header">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="product-details">
                    <p>{item.type}</p>
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

