import React, { Component } from 'react';
import './App.css';
import posed from 'react-pose';

function Highlights(){
  return (
    <div className="highlights">
      <div className="highlights-content">
        <div>
          <img src="" width="32" height="32" />
          <p>Proactive</p>
        </div>
        <div>
          <img src="" width="32" height="32" />
          <p></p>
        </div>
        <div>
          <img src="" width="32" height="32" />
          <p></p>
        </div>
        <div>
          <img src="" width="32" height="32" />
          <p></p>
        </div>
      </div>
    </div>
  );
}

const StealthText = posed.span({
  visible: { opacity: 0.5 },
  hidden: { opacity: 0 }  
});

class App extends Component {
  state = { isVisible: false };

  mouseEnter(){
    console.log("set true");
    this.setState({isVisible: true});
  }

  mouseLeave(){
    console.log("set false");
    this.setState({isVisible: false});
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div className="main">
        <header>
          <h1>Joakim Hedman</h1>
          <div className="job-title">
            <h3>Web Developer and <a href="https://thefarm.se/en/" target="_blank" rel="noopener noreferrer">The Farm</a></h3>
          </div>
          <div className="social-links">
            <a className="linkedin" href="https://www.linkedin.com/in/joakim-hedman/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span></a>
            <a className="twitter" href="https://twitter.com/zahhibb" target="_blank" rel="noopener noreferrer" onMouseEnter={this.mouseEnter}><span>Twitter</span></a>
            <StealthText className="stealth-text" pose={isVisible ? 'visible' : 'hidden'} >StealthText</StealthText>
          </div>
        </header>
        <div className="content">
          <Highlights />
        </div>
      </div>
    );
  }
}

export default App;
