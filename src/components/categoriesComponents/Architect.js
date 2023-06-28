import React from "react";
import "../styles/Category.css";
import { Link } from "react-router-dom";

function Architect() {
  return (
    <>
     
     

      <div className="categories--section">
          <div className="categories--head">
          <Link className="link" to="/" >
                  <li className="back--to--btn" >Home</li>
                  </Link>
            <h1 className="categories--title">Architect</h1>
          </div>
          <div className="comimgsoon--section">
              <h2>UPS! Coming soon...</h2>
              <br></br>
              <p>Subscribe for the newsletter to be first to know when it drops</p>
          </div>
      
      </div>

    </>



  );
}




export default Architect;