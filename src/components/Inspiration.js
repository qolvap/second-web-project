import React from "react";
import "./styles/Inspo.css";
import {Link} from "react-router-dom";
import Studio from "./Pictures/studio.png";
import Kitchen from "./Pictures/kitchen.png";
import HomeOffice from "./Pictures/homeoffice.png";
import Bedroom from "./Pictures/bedroom.png";

function Inspiration() {
    return (
        <div className="inspiration--section">
           


            <div className="banners--inspiration">
          <div className="container--inspiration--one">
            <div className="inspo--banner--container">
              <div className="text--column--one">
                <div className="banner--text--one">
                  <h2>Living room</h2>
                  <p>Fill your living room with prints that proudly match the sharm of the space</p>
                  <br></br>
                  <Link className="link" to="/Categories" >
                  <li className="banner--btn--inspo" >Learn more</li>
                  </Link>
                </div>
              </div>
              <div className="img--column--one">
                <img className="inso--img" src={Studio} alt="living room"/>
              </div>
            </div>
          </div>
        </div>

        <div className="banners--inspiration">
          <div className="container--inspiration--two">
            <div className="inspo--banner--container">

            <div className="img--column--two">
            <img className="inso--img" src={Bedroom} alt="bedroom"/>
              </div>

              <div className="text--column--two">
                <div className="banner--text--two">
                  <h2>Bedroom</h2>
                  <p>Complement your sleep chamber with the matching print</p>
                  <br></br>
                  <Link className="link" to="/Categories" >
                  <li className="banner--btn--inspo" >Learn more</li>
                  </Link>
                </div>
              </div>
             
            </div>
          </div>
        </div>

        <div className="banners--inspiration">
          <div className="container--inspiration--three">
            <div className="inspo--banner--container">
              <div className="text--column--three">
                <div className="banner--text--three">
                  <h2>Kitchen</h2>
                  <p>The place where the magic happens can be accompaniment with the beautiful attachments</p>
                  <br></br>
                  <Link className="link" to="/Categories" >
                  <li className="banner--btn--inspo" >Learn more</li>
                  </Link>
                </div>
              </div>
              <div className="img--column--three">
              <img className="inso--img" src={Kitchen} alt="kitchen"/>
              </div>
            </div>
          </div>
        </div>

        <div className="banners--inspiration">
          <div className="container--inspiration--four">
            <div className="inspo--banner--container">

            <div className="img--column--four">
                 <img className="inso--img" src={HomeOffice} alt="homeoffice"/>
              </div>

              <div className="text--column--four">
                <div className="banner--text--four">
                  <h2>Studio office</h2>
                  <p>Equip your workspace with the prints which will keep you focused</p>
                  <br></br>
                  <Link className="link" to="/Categories" >
                  <li className="banner--btn--inspo" >Learn more</li>
                  </Link>
                </div>
              </div>
             
            </div>
          </div>
        </div>

        </div>
           
        
    )
}

export default Inspiration