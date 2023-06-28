import React from "react";
import NatureItems from "./NatureItems";
import { Link } from "react-router-dom";

function Nature() {
  return (
    <>
      <div className="categories--section">
      <div className="categories--head">
      <Link className="link" to="/" >
                  <li className="back--to--btn" >Home</li>
                  </Link>
        <h1 className="categories--title">Nature</h1>
      </div>
      <NatureItems/>
      </div>
    </>
  );
}

export default Nature;