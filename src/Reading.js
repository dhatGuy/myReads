import React, { Component } from "react";
import Book from "./components/Book";

class Reading extends Component {
  render(){
    return(
      <div>
        <h1>Reading</h1>
        <div className="reading-books">
        {this.props.readingBooks.map((book, i) => (
          <div key={book.id}>
            <Book
              
              title={book.title}
              author={book.authors[0]}
              imageLink={book.imageLinks.smallThumbnail}
            />
          </div>
          ))}
          </div>
      </div>
    )
  }
}
export default Reading;
