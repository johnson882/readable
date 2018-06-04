import React, { Component } from 'react';
import Post from './Post'
import store from './reducers/'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post store={store}/>
      </div>
    );
  }
}

export default App;
