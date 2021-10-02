import React from "react";
// import logo from "../images/logo/Logo.jpg";

function Nav() {
  return (
    <header className="header">
      <div className="container-fluid px-lg-5">
        <nav className="py-4">
          <div id="logo">
            <h1>
              <a href="/">
                <span className="fa-solid fa-m" aria-hidden="true">
                </span>ildred Shop
              </a>
            </h1>
          </div>

          <label htmlFor="drop" className="toggle">
            Menu
          </label>
          <input type="checkbox" id="drop" />
          <ul className="menu mt-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
