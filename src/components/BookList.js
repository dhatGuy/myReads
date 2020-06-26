import React, { Component } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

class BookList extends Component {
  render() {
    const read = this.props.books.filter((book) => book.shelf === "read");
    const wantToRead = this.props.books.filter(
      (book) => book.shelf === "wantToRead"
    );
    const currentlyReading = this.props.books.filter(
      (book) => book.shelf === "currentlyReading"
    );
    return (
      <div className="book-shelf">
        <Link to="/search">Search</Link>
        <div className="read">
          <h1>Read</h1>
          {read.length === 0 ? (
            <p>Empty</p>
          ) : (
            read.map((book) => (
              <Book
                book={book}
                key={book.id}
                shelf={book.shelf}
                updateBook={this.props.updateBook}
                title={book.title}
                author={book.authors[0]}
                imageLink={book.imageLinks.smallThumbnail}
              />
            ))
          )}
        </div>
        <div className="currentlyReading">
          <h1>Reading</h1>
          {currentlyReading.length === 0 ? (
            <p>Empty</p>
          ) : (
            currentlyReading.map((book) => (
              <Book
                book={book}
                key={book.id}
                shelf={book.shelf}
                updateBook={this.props.updateBook}
                title={book.title}
                author={book.authors[0]}
                imageLink={book.imageLinks.smallThumbnail}
              />
            ))
          )}
        </div>

        <div className="want-to-read">
          <h1>Want to Read</h1>
          {wantToRead.length === 0 ? (
            <p>Empty</p>
          ) : (
            wantToRead.map((book) => (
              <Book
                book={book}
                key={book.id}
                shelf={book.shelf}
                updateBook={this.props.updateBook}
                title={book.title}
                author={book.authors[0]}
                imageLink={book.imageLinks.smallThumbnail}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default BookList;
