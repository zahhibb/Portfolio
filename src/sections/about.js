import React, { Component } from "react";
import "../App.css";

class AboutSection extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="about-container">
          <div>
            <h2>About me</h2>
            <p>This is a paragraph about me and what I like to do, please enjoy!</p>
          </div>
          <div></div>
        </div>
      </section>
    );
  }
}

export default AboutSection;
