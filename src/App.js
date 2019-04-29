import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <header>
          <h1>Joakim Hedman</h1>
          <nav>
            <a className="linkedin" href="https://www.linkedin.com/in/joakim-hedman/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span></a>
            <a className="twitter" href="https://twitter.com/zahhibb" target="_blank" rel="noopener noreferrer"><span>Twitter</span></a>
          </nav>
        </header>
        <div className="content">
        </div>
      </div>
    );
  }
}

export default App;
