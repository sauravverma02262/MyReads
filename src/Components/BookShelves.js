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
    createShlfBy: 'shelf',
    error: ''
  }

  bookShelfChanged = () => {
   let self = this
    BooksAPI.getAll().then((books) => {
      if(books.length > 0) {
        self.setState({ books })
      } else {
        self.setState({ books: [], error: 'No Books Found On Shelf.' })
      }
    }).catch((error)=>{
      self.setState({error})
    })
  }

  nameGenartor = (name) => {
    return name.replace(/([a-z](?=[A-Z]))/g, '$1 ')
  }
  createShelfBy = (createShlfBy) => {
    this.setState({ createShlfBy })
  }
  render() {
    const { books, createShlfBy, error } = this.state
    let bookShelfs = _.groupBy(books, createShlfBy)
    let shelfs = Object.keys(bookShelfs)
    return (
      <div className="App">
        <Header title="Book Shelves"  menu={true} />
        <div className="content">
          {shelfs.length === 0 && error === '' && <Spinner />}
          {error !== '' && <div className="no-data">  {error}  <a href="/search">Add books</a></div>}
          {shelfs.length > 0 && shelfs.map((shelf, index) => <Shelf key={index} name={this.nameGenartor(shelf)} books={bookShelfs[shelf]} bookShelfChanged={this.bookShelfChanged} />)}
        </div>
      </div>
    );
  }
}

export default BookShelves;
