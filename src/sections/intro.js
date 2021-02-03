import React, { Component } from "react";
import "../App.css";

class Intro extends Component {
  render() {
    return (
      <section className="intro" id="home">
        <div className="intro-container">
          <div className="intro-heading">
            <h1>Joakim Hedman</h1>
            <div>
              <h3 className="title-frontend">Frontend Developer</h3>
              <span>|</span>
              <h3 className="title-game">Game Developer</h3>
            </div>
          </div>
          <div className="intro-description">
            <p>Hello!</p>
            <p className="paragraph">My name is Joakim and I am a <strong>frontend web developer</strong> and <strong>junior technical game designer</strong>.</p>
            <p className="paragraph">Below you will find my portfolio and my various skills in both web- and game development.</p>
            <p><i>I am currently looking for new exciting job opportunities!</i></p>
            <div className="social-links">
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/joakim-hedman/" target="_blank" rel="noopener noreferrer"></a>
              </div>
              <div className="mail">
                <a href="mailto:jocke_hedman@hotmail.com"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
