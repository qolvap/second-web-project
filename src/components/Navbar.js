import React from "react";
import {Link} from "react-router-dom";
import "./styles/Navigbar.css";

import Logo from "./Pictures/logoF.png";
import Buy from "./Pictures/buy.png";

export default function Navbar({ cartItems }) { 
    return (
        <nav>
            <li>
            <Link to="/"  className="nav--sect">
            <img href="/" className="logo" src={Logo} alt="logo" />
            </Link>
            </li>
          <ul>
          
          <li>
          <Link to="/Categories" className="nav--sect">
            Categories
          </Link>
        </li>

        <li>
          <Link to="/Inspiration" className="nav--sect">
          Inspiration
          </Link>
        </li>

          <li>
          <Link to="/Card" className="nav--sect">
          <img className="buy" src={Buy} alt="card index" />
            <span> {cartItems.length}</span>
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}