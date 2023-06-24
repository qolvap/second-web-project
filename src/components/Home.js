import React from "react";
import popularItems from "./popularItems";
import  "./categoriesItems";
import { Link } from "react-router-dom";
import "./styles/Homepage.css";

import AbstractPic from "./Pictures/AbstractHome.png";
import StreetPic from "./Pictures/StreetHome.png";
import NaturePic from "./Pictures/NatureHome.png";
import ArchitectPic from "./Pictures/ArchitectHome.png";

import Studio from "./Pictures/studio.png";
import Kitchen from "./Pictures/kitchen.png";


function Home() {

    return (
    <div className="homepage--section">
      
      <div className="home--container">
        <div className="home--container--grid">
          <div className="home--container--grid--one">
            <Link to="/Categories/Abstract">
            <div className="content-card">
            <img className="home--container--grid--img" src={AbstractPic} alt="place" />
            
              <p className="card--description">Abstract</p>
            </div>
            </Link>
          </div>
          <div className="home--container--grid--two">
          <Link to="/Categories/Street">
            <div className="content-card">
            <img className="home--container--grid--img" src={StreetPic} alt="place" />
            
              <p className="card--description">Street</p>
            </div>
            </Link>
          </div>
          <div className="home--container--grid--three">
          <Link to="/Categories/Nature">
            <div className="content-card">
            <img className="home--container--grid--img" src={NaturePic} alt="place" />
              <p className="card--description">Nature</p>
            </div>
            </Link>
          </div>
          <div className="home--container--grid--four">
          <Link to="/Categories/Architect">
            <div className="content-card">
            
            <img className="home--container--grid--img" src={ArchitectPic} alt="place" />
            
              <p className="card--description">Architect</p>
              
            </div>
            </Link>
          </div>
        </div>

       

        <div className="banner">
          <div className="container">
            <div className="banner--container">
              <div className="text--column">
                <div className="banner--text">
                  <h2>See all products</h2>
                  <p>Big variety of all kind of prints</p>
                  <br></br>
                  <a className="banner--btn" href="/Categories">Learn more</a>
                </div>
              </div>
              <div className="img--column">
              <img className="inso--img" src={Studio} alt="living room"/>
              </div>
            </div>
          </div>
        </div>

        <div className="popular--section">
          <h1>Popular products</h1>
          <div className="popular--items--list">
            <div className="popular--items">
                {popularItems.map((item) => (
                  <Link key={item.id} to={`/product/${item.id}`} >
                  <div  className="popular--item">
                    
                    <div className="product-details">
                    <img className="item-img" src={item.picture} alt="img"></img>
                     
                  </div>
                </div>
                </Link>
          ))}
          </div>
          </div>
          </div>

          <div className="banner">
          <div className="container">
            <div className="new-banner--container">

            <div className="new-img--column">
            <img className="inso--img" src={Kitchen} alt="kitchen"/>
              </div>

              <div className="new-text--column">
                <div className="banner--text">
                  <h2>Enhance your own space</h2>
                  <p>Suit each room with print that fits exactly right</p>
                  <br></br>
                  <a className="banner--btn" href="/Inspiration">Discover more</a>
                </div>
              </div>
            
            </div>
          </div>


          
        </div>


        <div className="about--statistics">
                    <div className="statistics--text">
          <h4>We are here to make you feel yourself at home</h4>
          </div>
          
            <div className="about--statistics--one">
              <h4>Free</h4>
              <p>worldwide delivery</p>
            </div>
           
            <div className="about--statistics--two">
            <h4>180 days</h4>
              <p>free returns</p>
            </div>
            </div>
          </div>
       
      </div>
   
  );
}

export default Home;




