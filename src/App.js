import React, { Component } from "react";
import "./App.css";
import Intro from "./sections/intro";
import Projects from "./sections/projects";
import About from "./sections/about";
import CV from "./sections/cv";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import MobileNav from "./sections/mobile_navigation";

class App extends Component {
  render() {

    return (
      <div className="main">
        <div className="content">
          <div className="container">
            <Intro />
            <Projects />
            <div className="personal-section">
              {/* <CV /> */}
              <About />
            </div>
            {/* <Contact /> */}
          </div>
          <Footer />          
        </div>
        {/* <MobileNav /> */}
      </div>
    );
  }
}

export default App;
