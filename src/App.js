import React, { Component } from 'react';
import './App.css';

function SocialButton({link, imgClass}) {
  return (
    <div className={"social-button " + imgClass}>
      <a href={link}></a>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <h1>Joakim Hedman</h1>
          <h2>Frontend developer & Technical Game Designer</h2>
          <div className="socials">
            <SocialButton link={"linkedin"} imgClass={"linkedin"} />
            <SocialButton link={"twitter"} imgClass={"twitter"} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
