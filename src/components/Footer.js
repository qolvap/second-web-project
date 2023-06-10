import React from "react"
import Foot from "./styles/Foot.css"

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
                    <h1>Foot</h1>
                    <div className="foot--container">
                    
                        <div className="row">

                        <div className="column" >
                        <a className="foot--nav"  href="/">On top</a>
                        
                       
                        </div>
                        <div className="column">
                           
                        <a className="foot--nav"  href="/Inspiration">Inspiration</a>
                      
                       </div>
                        <div className="column">
                       
                        <a className="foot--nav" href="/Categories">Categories</a>
                            
                       
                        </div>

                        <div className="column">
                           
                            <p>Contact</p>
                       
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        
    )
}

export default Footer