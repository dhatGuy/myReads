import React from 'react';
import './App.css';
import BookList from "./components/BookList";
import * as BooksAPI from './BooksAPI'

class App extends React.Component {
  state = {
    books: []
}

componentDidMount() {
  BooksAPI.getAll().then(books=>{
    this.setState({books: [...books]})
    return books
  }).then(books=>{
    this.setState({
      read: books.filter(book=> book.shelf === "read"),
      reading: books.filter(book=> book.shelf === "currentlyReading"),
      toRead: books.filter(book=> book.shelf === "wantToRead")
    })
  })
}

updateBook=(book, shelf)=>{
  // BooksAPI.update(book, shelf)
  console.log(book,shelf)
}
  render(){
    const { read,toRead, reading} = this.state;
  return (
    <div className="App">
      <header className="App-header">
        MyReads
      </header>
      <div className="books">
        <BookList
          books={this.state.books}
          updateBook={this.updateBook}
        />
      </div>
    </div>
  )
  }
}

export default App;
