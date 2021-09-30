import React from 'react'


function Nav() {
    return (
        <div className="nav">
            <div className="logo">
            <img className="img" src={"./components/logo.jpg"} alt="logo"/>
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
