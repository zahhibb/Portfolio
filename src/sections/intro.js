import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <div className="intro-container">
          <div className="intro-heading">
            <h1>Joakim Hedman</h1>
            <div>
              <h3>Frontend Developer</h3>
              <span>|</span>
              <h3>Game Developer</h3>
            </div>
          </div>
          <div className="intro-description">
            <p>Hello!</p>
            <p>My name is Joakim and I am a <strong>frontend web developer</strong> and <strong>junior technical game designer</strong>.</p>
            <p>I am currently looking for new exciting job opportunities!</p>
            <p>Below you will find my portfolio and my various skills in both web- and game development.</p>
            <div className="social-links">
              <a href="#" className="mail"></a>
              <a hgref="#" className="linkedin"></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
