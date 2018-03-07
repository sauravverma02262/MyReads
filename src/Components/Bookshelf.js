import React, { Component } from 'react'
import Header from './Header'
/**
* @description Bookshelf will contain shelves
* @constructor
*/
class Bookshelf extends Component {
  render() {
    return (
      <div className="content">
        <Header title="Book Shelves" />
        <div className="container">
          <h1>Shelf will appear here</h1>
        </div>
      </div>
    )
  }
}
export default Bookshelf
