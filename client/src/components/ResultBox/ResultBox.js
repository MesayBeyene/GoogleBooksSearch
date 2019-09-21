import React from "react";
import { Link } from "react-router-dom";
import "../ResultBox/ResultBox.css";
// import { PromiseProvider } from "mongoose";

function ResultBox(props) {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12 center">
          <p>{props.title}</p>
          <p>{props.description}</p>
          <img src={props.image} />
          <p>{props.authors}</p>
          <a href={props.link}>Link To Book</a>
        </div>
      </div>
    </div>
  );
}
export default ResultBox;
