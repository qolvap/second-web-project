import AbstractItem from "./AbstractItem";
import categoriesItems from "../categoriesItems";
import Footer from "../Footer";

function Abstract() {

  const filteredItems = categoriesItems.filter((item) => item.type === "abstract");

  return (
    <>
      <AbstractItem />
      <Footer />
    </>
  );
}

export default Abstract;