import React, { useState } from "react";
import Categories from "../Categories";
import Footer from "../Footer";
import categoriesItems from "../categoriesItems";


function All() {

  const [filteredItems, setFilteredItems] = useState(categoriesItems);

  return (
    <>
      <Categories filteredItems={filteredItems} setFilteredItems={setFilteredItems} />
      <Footer />
    </>
  );
}

export default All;