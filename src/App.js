import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import * as BooksAPI from "./utils/BooksAPI";
import SearchBar from "./components/Search";
import { Route } from "react-router-dom";

class App extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: [...books],
      });
    });
  }
  onSearch = (query) => {
    if (query !== "") {
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks !== undefined && searchedBooks.length > 0) {
          const shelvedBooks = searchedBooks.map((book) => {
            const filteredBook = this.state.books.filter(
              (myBook) => myBook.id === book.id
            );
            return filteredBook.length > 0 ? filteredBook[0] : book;
          });
          this.setState({ searchedBooks: shelvedBooks });
        } else {
          this.setState({ searchedBooks: [] });
        }
      });
    }
  };

  debounce = (func, delay) => {
    let timerId;
    return (...args) => {
      const boundFunc = func.bind(this, ...args);
      clearTimeout(timerId);
      timerId = setTimeout(boundFunc, delay);
    };
  };
  updateBook = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(() =>
      this.setState((prevstate) => ({
        books: prevstate.books
          .filter((b) => b.title !== book.title)
          .concat([book]),
      }))
    );
  };

  render() {
    const { books, searchedBooks } = this.state;
    return (
      <div className="App">
        <>
          <header className="App-header">MyReads</header>
          <Route
            path="/search"
            render={() => (
              <SearchBar
                onSearch={this.debounce(this.onSearch, 100)}
                searchedBooks={searchedBooks}
                updateBook={this.updateBook}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <BookList books={books} updateBook={this.updateBook} />
            )}
          />
        </>
      </div>
    );
  }
}

export default App;
