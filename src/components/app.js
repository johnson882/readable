import React, { Component } from 'react';
import Post from './Post'
import CreatePost from './CreatePost'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../reducers/'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>

        <Route exact path='/' component={CreatePost} />

        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
