import React, { Component } from "react";

class Book extends Component {
  handleChange = (e, book) => {
    const shelf = e.target.value;
    this.props.updateBook(book, shelf);
  };
  render() {
    const { imageLink, title, author, shelf, book } = this.props;
    return (
      <div className="book">
        <div
          className="book-cover"
          style={{ backgroundImage: `url(${imageLink})` }}
        ></div>
        <div className="book-title">{title}</div>
        <div className="book-author">{author}</div>
        <select
          onChange={(e) => this.handleChange(e, book)}
          name="dropdown"
          value={shelf}
        >
          <option disabled>Move book to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default Book;
