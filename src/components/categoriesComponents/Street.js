import React from "react";
import StreetItems from "./StreetItems";
import { Link } from "react-router-dom";

function Street() {
  return (
    <>
      <div className="categories--section">
      <div className="categories--head">
      <Link className="link" to="/" >
                  <li className="back--to--btn" >Home</li>
                  </Link>
        <h1 className="categories--title">Street</h1>
      </div>
      <StreetItems/>
      </div>
     
    </>
  );
}

export default Street;