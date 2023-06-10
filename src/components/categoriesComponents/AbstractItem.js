import { Link } from "react-router-dom";
import categoriesItems from "../categoriesItems";


function AbstractItem() {

  const filteredItems = categoriesItems.filter((item) => item.type === "abstract");

  return (
    <>
      <div className="proud-container">
        <div className="container">
          <div className="products--items">
            {filteredItems.map((item) => (
              <div key={item.id} className="productCard">
                <Link to={`/categories/product/${item.id}`}>
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

export default AbstractItem;