import React, { Component } from 'react';
import Header from './Header'

class AddBook extends Component {
  state = {

  }
  render() {
    return (
      <div className="content">
        <Header title="Book Shelves | Add Book" active="add" />
        <div className="container">
          <h1>Search and Book Result</h1>
        </div>
      </div>)
  }
}

export default AddBook
