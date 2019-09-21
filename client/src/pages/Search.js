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
  componentDidMount() {
    this.searchBook("java script");
  }

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
          books: booksResult.data.items
        });

        console.log(this.state.books);
      })
      .catch(err => console.log(err));
  };
  render() {
    let bookItems = this.state.books.map((book, index) => {
      return (
        <ResultBox
          key={index}
          title={book.volumeInfo.title}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks.smallThumbnail}
          authors={book.volumeInfo.authors}
          link={book.volumeInfo.infoLink}
        />
      );
    });
    return (
      <div>
        <Navbar />
        <Header />
        <BookSearch userInput={this.userInput} searchBook={this.searchBook} />
        {bookItems}
        {/* <Textbox /> */}
        {/* <img src="./image/cute-cat.jpeg" alt="Placeholder" /> */}
      </div>
    );
  }
}
export default Search;
