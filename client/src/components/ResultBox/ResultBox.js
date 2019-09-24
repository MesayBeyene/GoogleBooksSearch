import React from "react";
import "../ResultBox/ResultBox.css";
// import { PromiseProvider } from "mongoose";

function ResultBox(props) {
  let button = "";
  if (props.saveBook) {
    button = (
      <button
        class="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={() =>
          props.saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
          })
        }
      >
        Save
      </button>
    );
  } else {
    button = (
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={() => props.deleteBook(props.id)}
      >
        Delete
      </button>
    );
  }

  return (
    <div className="section">
      <div className="row">
        <div className="col s12 center">
          <p>{props.title}</p>
          <p>{props.description}</p>
          <img src={props.image} />
          <p>{props.authors}</p>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            <a className="resultView" href={props.link}>
              View
            </a>
          </button>
          {button}
        </div>
      </div>
    </div>
  );
}
export default ResultBox;
