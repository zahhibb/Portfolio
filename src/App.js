import React, { Component } from "react";
import "./App.css";
import Intro from "./sections/intro";
import Nav from "./sections/navigation";
import Footer from "./sections/footer";

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="main">
        <div className="content">
          <div className="container">
            <Intro />
            <Nav />
            <section className="page-content">{children}</section>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
