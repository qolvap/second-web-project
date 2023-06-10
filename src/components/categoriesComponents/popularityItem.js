import {items} from "./categoriesItems";


function popularityItem(){ 
    const filteredItems = items.filter((item) => item.popularity === true)
    return (
        <>
       <div className="all--products">
        <div className="products--items--list">
          <div className="all--items">
            {filteredItems.map((item) => (
              <div key={item.id} className="product">
                <div className="product-header">
                  <span>{item.name}</span>
                </div>
                <div className="product-details">
                  <p className="item-price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        </>
    )
}
export default popularityItem;