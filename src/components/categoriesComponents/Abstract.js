import React from "react";
import AbstractItem from "./AbstractItem";

function Abstract() {
  return (
    <>
    <div className="categories--section">
      <div className="categories--head">
        <a className="back--to--btn"  href="/">
          Home
        </a>
        <h1 className="categories--title">Abstract</h1>
      </div>
      <AbstractItem />
      </div>
    </>
  );
}

export default Abstract;
