import React, { Component} from "react";

class Book extends Component {
  state={
    value: ""
  }
  handleChange =(e, book) => {
    this.setState(
      { value: e.target.value }
    )
    this.props.updateBook(book)
  }
  render() {
    const {imageLink, title, author } = this.props;
    return(
      <div className="book">
        <div className="book-cover" style={ { backgroundImage: `url(${imageLink})` }}></div>
        <div className="book-title">{title}</div>
        <div className="book-author">{author}</div>
        <select onChange={this.handleChange} name="dropdown" value={this.state.value}>
          <option disabled>Move book to...</option>
          <option value="none">None</option>
          <option value="wantToread">Want to Read</option>
          <option value="read">Read</option>
          <option value="reading">CurrentlyReading</option>
        </select>
      </div>
    )
  }
}

export default Book;
