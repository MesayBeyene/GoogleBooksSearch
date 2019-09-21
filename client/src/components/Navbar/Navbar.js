import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo left">
          Google Books
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          {/* <li>
            <Link to="/"></Link>
          </li> */}
          <li id="search">
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/Saved">Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
