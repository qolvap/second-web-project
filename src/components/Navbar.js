import React from "react";
import {Link} from "react-router-dom"
import "./styles/Navigbar.css"

export default function Navbar() { 
    return (
        <nav>
            <a href="/" classNamme="logo">logo</a>
            
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
          <Link to="/Careers" className="nav--sect">
            Careers
          </Link>
        </li>
      </ul>
    </nav>
  );
}