import React from "react";
import "./styles/Foot.css";
import { Link } from "react-router-dom";


function Footer() {
    return (

        <div>

                    <div className="newsletter--banner">
                        <div className="newsletter--box">
                            <h2 className="newsletter--text">Subscribe for our newsletter, to get 30% discount for the first order</h2>
                           <form>
                            <input type="email" placeholder="Enter Your e-mail" className="email--input"></input>
                            <button type="submit" className="submit-btn">Subscribe</button>
                            </form> 
                        </div>
                    </div>
       
                <div className="foot">
                    
                    <div className="foot--container">
                    
                        <div className="row">

                        <div className="column" >
                        
                         
                        <Link className="link" to="/" >
                  <li className="foot--nav">Home</li>
                  </Link>
                       
                        </div>
                        <div className="column">
                           
                         
                        <Link className="link" to="/Inspiration" >
                  <li className="foot--nav">Inspiration</li>
                  </Link>
                      
                       </div>
                        <div className="column">
                       
                         
                        <Link className="link" to="/Categories" >
                  <li className="foot--nav">Categories</li>
                  </Link>
                            
                       
                        </div>

                        <div className="column">
                           
                             
                        <Link className="link" to="/" >
                  <li className="foot--nav">Contact</li>
                  </Link>
                       
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        
    )
}

export default Footer