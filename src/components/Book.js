import React, { Component } from "react";

class Book extends Component {
  state={
    shelf: "none"
  }
  componentDidMount() {
    if(this.props.shelf) {
      this.setState({
        shelf: this.props.shelf
      })
    }
  }
  handleChange = (e, book) => {
    const shelf = e.target.value;
    this.setState({
      shelf
    })
    this.props.updateBook(book, shelf);
  };
  render() {
    const { imageLink, title, author, book } = this.props;
    return (
      <div className="book">
        <div
          className="book-cover"
          style={{
            backgroundImage: `url(${
              imageLink === undefined ? null : imageLink
            })`,
          }}
        >
          {imageLink ? null : "No Image Available"}
        </div>
        <select
          onChange={(e) => this.handleChange(e, book)}
          name="dropdown"
          value={this.state.shelf}
        >
          <option disabled>Move book to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
        <div className="book-title">{title}</div>
        <div className="book-author">
          {author && author.map((author) => <p key={author}>{author}</p>)}
        </div>
      </div>
    );
  }
}

export default Book;
