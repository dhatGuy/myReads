import React, { Component } from "react";
import Book from "./components/Book";

class Read extends Component {
  render(){
    return(
      <div className="read">
        <h1>Read</h1>
        <div className="read-books">
        {this.props.readBooks.map((book, i)=>(
          <div key={book.id}>
            <Book
              updateBook={()=>this.props.updateBook(book)}
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

export default Read;
