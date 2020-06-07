import React, { Component } from "react";
import "../App.css";
import App from "../App";
import About from "../sections/about";
import Projects from "../sections/projects";

class Home extends Component {
  render() {
    return (
      <App>
          <About />
          <Projects />          
      </App>
    );
  }
}

export default Home;
