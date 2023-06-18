import React from "react";
import StreetItems from "./StreetItems";

function Street() {
  return (
    <>
      <div className="categories--section">
      <div className="categories--head">
        <a className="back--to--btn" href="/">
          Home
        </a>
        <h1 className="categories--title">Street</h1>
      </div>
      <StreetItems/>
      </div>
     
    </>
  );
}

export default Street;