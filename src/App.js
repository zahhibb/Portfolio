import React, { Component } from "react";
import "./App.css";
import Intro from "./sections/intro";
import Projects from "./sections/projects";
import About from "./sections/about";
import Footer from "./sections/footer";

class App extends Component {
  render() {

    return (
      <div className="main">
        <div className="content">
          <div className="container">
            <Intro />
            <Projects />
            <About />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
