import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import ResultBox from "../components/ResultBox/ResultBox";
import api from "../utils/api";
// import Textbox from "../components/Textbox";

class Saved extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    api.getBooks().then(response => {
      console.log(response.data);
      this.setState({
        books: response.data
      });
    });
  }

  deleteBook = id => {
    console.log("delete book", id);
    api.deleteBook(id).then(response => {
      console.log("book Deleted");
      let books = this.state.books;
      let found = false;
      let indexToDelete = null;
      for (let i = 0; i < books.length && !found; i++) {
        if (books[i]._id === id) {
          found = true;
          indexToDelete = i;
        }
      }
      console.log(indexToDelete);

      if (indexToDelete != null) {
        this.setState({
          books: [
            ...books.slice(0, indexToDelete),
            ...books.slice(indexToDelete + 1)
          ]
        });
      }
    });
  };

  render() {
    let bookItems = this.state.books.map((book, index) => {
      return (
        <ResultBox
          key={index}
          id={book._id}
          title={book.title}
          description={book.description}
          image={book.image}
          authors={book.authors}
          link={book.link}
          deleteBook={this.deleteBook}
        />
      );
    });
    return (
      <div>
        <Navbar />
        <Header />

        {bookItems}
      </div>
    );
  }
}
export default Saved;
