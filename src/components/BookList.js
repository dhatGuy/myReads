import React, { Component} from "react";
import Read from "../Read";
import ToRead from "../ToRead";
import Reading from "../Reading";
import Book from "./Book"

class BookList extends Component {
  render(){

    return(
      <div className="book-shelf">
        <div className="read">
        <header>Read</header>
          {this.props.books.filter(
            book => book.shelf === "read"
          ).map(book=>(

                <Book
                  updateBook={()=>this.props.updateBook()}
                  key={book.id}
                  title={book.title}
                  author={book.authors[0]}
                  imageLink={book.imageLinks.smallThumbnail}
                />


          ))}
          </div>
          <div className="reading">
          <h1>Reading</h1>
          {this.props.books.filter(
            book => book.shelf === "currentlyReading"
          ).map(book=>(
                <Book
                  updateBook={this.props.updateBook(book)}
                  key={book.id}
                  title={book.title}
                  author={book.authors[0]}
                  imageLink={book.imageLinks.smallThumbnail}
                />

          ))}
          </div>

          <div className="want-to-read">
          <h1>Want to Read</h1>
          {this.props.books.filter(
            book => book.shelf === "wantToRead"
          ).map(book=>(
                <Book
                  key={book.id}
                  updateBook={this.props.updateBook(book)}
                  title={book.title}
                  author={book.authors[0]}
                  imageLink={book.imageLinks.smallThumbnail}
                />

          ))}
      </div>
      </div>
    )
  }
}

export default BookList;
