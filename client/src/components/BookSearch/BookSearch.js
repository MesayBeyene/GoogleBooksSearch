import React from "react";
import { Link } from "react-router-dom";
import "../BookSearch/BookSearch.css";
// import { PromiseProvider } from "mongoose";

function BookSearch(props) {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12 center">
          <input
            type="text"
            className="searchInput"
            value={props.search}
            onChange={event => props.userInput(event)}
          />
          <button
            onClick={() => props.searchBook()}
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
          {/* <button onClick={() => props.searchBook()}>Submit</button> */}
        </div>
      </div>
    </div>
  );
}
export default BookSearch;
