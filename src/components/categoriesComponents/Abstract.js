import React from "react";
import AbstractItem from "./AbstractItem";
import { Link } from "react-router-dom";

function Abstract() {
  return (
    <>
    <div className="categories--section">
      <div className="categories--head">
      <Link className="link" to="/" >
                  <li className="back--to--btn" >Home</li>
                  </Link>
        <h1 className="categories--title">Abstract</h1>
      </div>
      <AbstractItem />
      </div>
    </>
  );
}

export default Abstract;
