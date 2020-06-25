import React, { Component } from "react";
import Book from "./components/Book";

class ToRead extends Component {
  render(){
    return(
      <div>
        <h1>Want to Read</h1>
        <div className="to-read-books">
          {this.props.toReadBooks.map((book,i)=> (
            <div key={book.id}>
            <Book
              title={book.title}
              author={book.authors[0]}
              imageLink={book.imageLinks.thumbnail}
            />
          </div>
          ))}
        </div>
      </div>
    )
  }
}

export default ToRead;
