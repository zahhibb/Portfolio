import React, { Component } from 'react';
import './App.css';
import posed from 'react-pose';

function ContentElement(){
  return(
    <div className="content-element">

    </div>
  );
}

const StealthText = posed.span({
  hoverable: true,
  hover: { 
    opacity: 1,
  },  
  visible: { opacity: 0.5 },
  hidden: { opacity: 0 }  
});

class App extends Component {
  state = { isVisible : true }

  render() {
    const { isVisible } = this.state;

    return (
      <div className="main">
        <header>
          <h1>Joakim Hedman</h1>
          <div className="job-titles">
            <h3><a href="#">Web Developer</a></h3>
            <span>/</span>
            <h3><a href="#">Game Developer</a></h3>
          </div>
          <div className="social-links">
            <a className="linkedin" href="https://www.linkedin.com/in/joakim-hedman/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span></a>
            <a className="twitter" href="https://twitter.com/zahhibb" target="_blank" rel="noopener noreferrer"><span>Twitter</span></a>
            <StealthText className="stealth-text" pose={this.state.isVisible ? 'visible' : 'hidden'} >StealthText</StealthText>
          </div>
        </header>
        <div className="content">
          <ContentElement />
        </div>
      </div>
    );
  }
}

export default App;
