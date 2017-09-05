import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FloatingSidebar from './FloatingSidebar';

class App extends Component {


  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Floating Side Bar</h2>
        </div>
        <div style={{height: '300px'}}>
          <FloatingSidebar/>
        </div>
      </div>      
      
    );
  }
}

export default App;
