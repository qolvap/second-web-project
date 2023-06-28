import React from "react";
import PopularityItem from "./PopularityItem";
import { Link } from "react-router-dom";

function Popular(){
    return (
        <>
        <div className="categories--section">
      <div className="categories--head">
      <Link className="link" to="/" >
                  <li className="back--to--btn" >Home</li>
                  </Link>
        <h1 className="categories--title">Popular</h1>
      </div>
      <PopularityItem/>
      </div>
        </>
    )
}
export default Popular;