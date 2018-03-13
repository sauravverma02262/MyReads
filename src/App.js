import React, { Component } from 'react';
import './Stylesheets/App.css';
import { Route } from 'react-router-dom'
import BookShelves from './Components/BookShelves'
import AddBook from './Components/AddNewBook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={BookShelves} />
        <Route exact path="/search" component={AddBook} />
      </div>
    );
  }
}

export default App;
