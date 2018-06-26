import React, { Component } from 'react';
import Post from './Post'
import CreatePost from './CreatePost'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Router ,Switch, Link } from 'react-router-dom';
import store from '../reducers/'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
  <Link to="/newpost">New Post</Link>


        <Route exact path='/newpost' component={CreatePost} />
        <Route exact path='/' component={Post} />

        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
