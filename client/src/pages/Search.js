import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Textbox from "../components/Textbox";

class Search extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Textbox />
        <img src="./image/cute-cat.jpeg" alt="Placeholder" />
      </div>
    );
  }
}
export default Search;
