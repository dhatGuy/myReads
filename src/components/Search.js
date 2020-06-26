import React from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book"

class SearchBar extends React.Component {
  state = {
    query: ""
  }
  onChange=(e) => {
    this.setState(
      { query: e.target.value }
    )
    this.props.onSearch(this.state.query)
  }
  render() {
    const { searchedBooks } = this.props;
    return(
    <div>
      <Link to="/">Back</Link>
      <input type="text" value={this.state.query} onChange={this.onChange}/>
      {searchedBooks.length <= 0 ? <p>no result</p> :
      <div className="searched-books">{this.props.searchedBooks.map(book=>(
        <Book
        book={book}
        key={book.id}
        shelf={book.shelf || "none"}
        updateBook={this.props.updateBook}
        title={book.title}
        author={book.authors}
        imageLink={book.imageLinks !== undefined && book.imageLinks.smallThumbnail}
      />
      ))}
      </div>}
    </div>
    )
  }
}

export default SearchBar;