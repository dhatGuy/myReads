import React from "react";
import { Route, Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = {
    query: ""
  }
  render() {
    return(
    <div>
      <Link to="/">Back</Link>
      <input type="text" value={this.state.query} onChange={this.onChange}/>
    </div>
    )
  }
}

export default SearchBar;
