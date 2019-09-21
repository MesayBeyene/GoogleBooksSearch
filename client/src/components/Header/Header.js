import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

function Header() {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12 center">
          <h3>
            <i className="mdi-content-send brown-text">
              (React) Google Book Search
            </i>
          </h3>
          <h5>Search for and Save Books of Internet</h5>
        </div>
      </div>
    </div>
  );
}
export default Header;
