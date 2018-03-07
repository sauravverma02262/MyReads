import React, { Component } from 'react';
import './Styles/App.css'
import { Route } from 'react-router-dom'
import BookShelf from './Components/Bookshelf'
import AddBook from './Components/AddNewBook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={BookShelf} />
        <Route exact path="/addBook" component={AddBook} />
      </div>
    )
  }
}

export default App;
