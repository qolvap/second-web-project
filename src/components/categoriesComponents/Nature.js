import React from "react";
import NatureItems from "./NatureItems";


function Nature() {
  return (
    <>
      <div className="categories--section">
      <div className="categories--head">
        <a className="cat--back--to--home--page" href="/">
          Home
        </a>
        <h1 className="categories--title">Nature</h1>
      </div>
      <NatureItems/>
      </div>
    </>
  );
}

export default Nature;