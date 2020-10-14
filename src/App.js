import React, { Component } from "react";
import "./App.css";
import Nav from "./sections/navigation";
import Intro from "./sections/intro";
import Projects from "./sections/projects";
import About from "./sections/about";
import CV from "./sections/cv";
import Footer from "./sections/footer";

class App extends Component {
  render() {

    return (
      <div className="main">
        <div className="content">
          <Nav />
          <div className="container">
            <Intro />
            <Projects />
            <div className="personal-section">
              <CV />
              <About />
            </div>
            <Footer />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
