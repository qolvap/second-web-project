import React from "react";
import PopularityItem from "./PopularityItem";

function Popular(){
    return (
        <>
        <div className="categories--section">
      <div className="categories--head">
        <a className="back--to--btn" href="/">
          Home
        </a>
        <h1 className="categories--title">Popular</h1>
      </div>
      <PopularityItem/>
      </div>
        </>
    )
}
export default Popular;