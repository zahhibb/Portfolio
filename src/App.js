import React, { Component } from 'react';
import './App.css';

function SocialButton({ link, imgClass, anchorContent }) {
  return (
    <div className={"social-button " + imgClass}>
      <a href={link}>{anchorContent}</a>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <h1>Joakim Hedman</h1>
          <h2>Frontend developer</h2><span>/</span><h2>Technical Game Designer</h2>
          <div className="socials">
            <SocialButton link={"https://www.linkedin.com/in/joakim-hedman/"} imgClass={"linkedin"} anchorContent={"LinkedIn"} />
            <SocialButton link={"https://twitter.com/Zahhibb"} imgClass={"twitter"} anchorContent={"Twitter"} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
