import React, { Component } from 'react';
import * as BooksAPI from '../API/BooksAPI';
import _ from 'lodash'
import Shelf from './Shelf'
import Header from './Header'
import Spinner from './Spinner'

class BookShelves extends Component {
  componentDidMount() {
    this.bookShelfChanged();
  }

  state = {
    books: {},
    createShlfBy: 'shelf'
  }

  bookShelfChanged = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  nameGenartor = (name) => {
    return name.replace(/([a-z](?=[A-Z]))/g, '$1 ')
  }
  createShelfBy = (createShlfBy) => {
    this.setState({ createShlfBy })
  }
  render() {
    const { books, createShlfBy } = this.state
    let bookShelfs = _.groupBy(books, createShlfBy)
    let shelfs = Object.keys(bookShelfs)
    return (
      <div className="App">
        <Header title="Book Shelves"  menu={true} />
        <div className="content">
          {shelfs.length === 0 && <Spinner />}
          {shelfs.length > 0 && shelfs.map((shelf, index) => <Shelf key={index} name={this.nameGenartor(shelf)} books={bookShelfs[shelf]} bookShelfChanged={this.bookShelfChanged} />)}
        </div>
      </div>
    );
  }
}

export default BookShelves;
