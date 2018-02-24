import React, { Component } from 'react';
import logo from './logo.svg';

// import './App.css'
import './sass_files/Main.css';

import Left from './components/Left'
import Right from './components/Right'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Left />
        <Right />
      </div>
    );
  }
}

export default App;
