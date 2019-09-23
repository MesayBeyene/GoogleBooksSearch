import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import BookSearch from "../components/BookSearch/BookSearch";
import ResultBox from "../components/ResultBox/ResultBox";
import api from "../utils/api";
// import Textbox from "../components/Textbox";

class Search extends Component {
  state = {
    books: [],
    search: ""
  };
  componentDidMount() {}

  userInput = event => {
    console.log("userInput");
    console.log(event.target.value);
    this.setState({
      search: event.target.value
    });
  };

  searchBook = () => {
    let query = this.state.search;
    api
      .search(query)
      .then(booksResult => {
        this.setState({
          search: "",
          books: booksResult.data.items
        });

        console.log(this.state.books);
      })
      .catch(err => console.log(err));
  };

  saveBook = data => {
    console.log("save book", data);
    api.saveBook(data).then(response => {
      console.log("book saved");
    });
  };

  render() {
    let bookItems = this.state.books.map((book, index) => {
      let imageLinks = book.volumeInfo.imageLinks;
      let image = "";
      if (imageLinks) {
        image = imageLinks.thumbnail;
      }
      return (
        <ResultBox
          key={index}
          title={book.volumeInfo.title}
          description={book.volumeInfo.description}
          image={image}
          authors={book.volumeInfo.authors}
          link={book.volumeInfo.infoLink}
          saveBook={this.saveBook}
        />
      );
    });
    return (
      <div>
        <Navbar />
        <Header />
        <BookSearch
          search={this.state.search}
          userInput={this.userInput}
          searchBook={this.searchBook}
        />
        {bookItems}
        {/* <Textbox /> */}
        {/* <img src="./image/cute-cat.jpeg" alt="Placeholder" /> */}
      </div>
    );
  }
}
export default Search;
