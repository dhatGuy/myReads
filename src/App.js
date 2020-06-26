import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import * as BooksAPI from "./utils/BooksAPI";
import SearchBar from "./components/Search";
import { Link, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    books: [],
    showSearch: false,
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: [...books],
      });
    });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>
      this.setState((prevstate) => ({
        books: prevstate.books.filter((b) => {
          if (b.id === book.id) {
            return (book.shelf = shelf);
          } else {
            return book;
          }
        }),
      }))
    );
  };
  render() {
    const { books } = this.state;
    return (
      <div className="App">
        <>
          <header className="App-header">MyReads</header>

          <Route path="/search" component={SearchBar} />
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
