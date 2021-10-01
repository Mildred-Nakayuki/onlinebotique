import React from 'react'
import logo from "../images/logo/Logo.jpg"

function Nav() {
    return (
        <div className="nav">
            <div className="logo">
              <img className="img" src={logo} alt="logo"/>
            </div>
            
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About</li>
                </ul>
            </div>

        </div>
        
    )
}

export default Nav
