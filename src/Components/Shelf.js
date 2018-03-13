import React, { Component } from 'react'
import Book from './Book'
import '../Stylesheets/Shelf.css'
import BookDetails from './BookDetails'
import PropTypes from 'prop-types'
// import SortBy from 'sort-by'

class Shelf extends Component {

  static propTypes = {
    books : PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
  }

  state = {
    bookDetails: {}
  }
  showBookDetails = (bookDetails) => {
    this.setState({ bookDetails })
  }

  render() {
    const { bookDetails } = this.state
    const { name, books, bookShelfChanged } = this.props
    let sortedBooks = books   // .sort(SortBy('title'))
    return (
      <div className="shelf-container animate-bottom">
        <div className="shelf" >
          <div className="shelf-book-holder">
            <div className="shelf-name">{name}</div>
            <div className="books-contents">
              {sortedBooks.map((book, index) => (
                <Book
                  key={index}
                  book={book}
                  showBookDetails={this.showBookDetails}
                  bookShelfChanged={bookShelfChanged} />)
              )}
            </div>
            <div className="books-shelf-s" >
            </div>
          </div>
          {bookDetails.title && bookDetails.title.length > 0 && <BookDetails bookDetails={bookDetails} showBookDetails={this.showBookDetails} />}
        </div>
      </div>
    )
  }
}

export default Shelf
