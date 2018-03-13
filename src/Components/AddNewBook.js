import React, { Component } from 'react';
import * as BooksAPI from '../API/BooksAPI';
import Book from './Book'
import Header from './Header'
import Spinner from './Spinner'
import SearchIcon from '../Images/search.svg'

class AddBook extends Component {
    
  constructor() {
    super();
    let self = this
    BooksAPI.getAll().then(ShelfBooks => {
      self.setState({ShelfBooks})
    })
  }

  /**
   * @param query 
   */
  searchBooks = (query) => {
    this.setState({ query: query, loading: true })
    let self = this
    if (query.trim().length > 2) {
      BooksAPI.search(query.trim(), 20).then((searchResult) => {
        if (searchResult && !searchResult.error) {
          self.setState({ searchResult, loading: false })
        } else {
          self.setState({ searchResult: [], loading: false })
        }
      })
    } else {
      this.setState({ searchResult: [], loading: false })
    }
  }
  state = {
    searchResult: [],
    query: '',
    loading: false,
    ShelfBooks: []
  }
  render() {
    const { searchResult, query, loading, ShelfBooks } = this.state
    let dispalyBooks = searchResult.map((book) => {
      let found =  ShelfBooks.filter((bookInShelf) => (book.id === bookInShelf.id))
      return found.length > 0 ? found[0] : book
    })
    return (
      <div>
        <Header title="Book Shelves | Add Book"/>
        <div className="search-input">
        <img  src={SearchIcon} alt="search" />
          <input type="text" placeholder="Search book.." value={query} onChange={(event) => this.searchBooks(event.target.value)} />
        </div>
        <div className="content center">
          {loading && <Spinner />}
          {query.length > 2 && dispalyBooks.length > 0 && dispalyBooks.map((book) => <Book key={book.id} book={book} add={true} showBookDetails={()=>{}}/>)}
          {!loading && query.length > 2 && dispalyBooks.length === 0 && <div className="no-data">No book found for : {query}</div>}
        </div>


      </div>)
  }
}

export default AddBook