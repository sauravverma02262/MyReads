import React, { Component } from 'react'
import '../Stylesheets/Book.css';
import * as BooksAPI from '../API/BooksAPI';
import { Redirect } from 'react-router-dom'
import Spinner from './Spinner'
import NoCover from '../Images/cover-not-found.jpg'
import { ShelfChanger } from '../Constants'
import PropTypes from 'prop-types'
class Book extends Component {
  static propTypes = {
    book : PropTypes.object.isRequired,
    showBookDetails: PropTypes.func.isRequired,
    bookShelfChanged: PropTypes.func,
    add: PropTypes.bool
  }
  
  state = {
    updateStatus: '',
    bookAdded: false,
    updating: false
  }
  readingStatus = (book, shelf) => {
    this.setState({ updateStatus: shelf, updating: true })
    let self = this
    BooksAPI.update(book, shelf).then((books) => {
      self.setState({ bookAdded: true })
      if (self.props.bookShelfChanged) {
        self.props.bookShelfChanged()
        self.setState({ updating: false })
      } else {
        self.setState({ updating: false })
      }
    })
  }
  render() {
    const { bookAdded, updating } = this.state
    const { book, showBookDetails, bookShelfChanged, add } = this.props
    return (
      <div className="book-holder animate-bottom">
        {bookAdded && !bookShelfChanged && <Redirect to="/" />}
        {updating && <Spinner size="small" />}
        <div className="book-image-holder">
          {!add && <a onClick={() => showBookDetails(book)}>
            <img src={book.imageLinks ? book.imageLinks.thumbnail : NoCover} alt={book.title} />
          </a>}

          {add && <img src={book.imageLinks ? book.imageLinks.thumbnail : NoCover} alt={book.title} />}

          <div className="description">
            <div className="title">{book.title ? book.title : "No title found"}</div>
            <div className="authors">
              {book.authors ? book.authors.join(', ') : ""}
            </div>
          </div>
        </div>
        <div className="book-shelf-changer">
          <select defaultValue={book.shelf ? book.shelf : 'none' } onChange={(event) => this.readingStatus(book, event.target.value)}>
            <option value="null" disabled>Move to...</option>
            {ShelfChanger.map((shelfName, index) => (
              <option key={index} value={shelfName.value}>{shelfName.label}</option>
            ))}
          </select>
        </div>
      </div >
    )
  }
}

export default Book