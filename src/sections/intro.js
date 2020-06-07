import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <div>
          <Link to="/"><h1>Joakim Hedman</h1></Link>
          <h3>Tech Generalist | GameDev Enthusiast</h3>
        </div>
      </section>
    );
  }
}

export default Intro;
