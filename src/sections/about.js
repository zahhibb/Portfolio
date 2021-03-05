import React, { Component } from "react";
import "../App.css";

class AboutSection extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="about-container">
          <div>
            <a href="https://www.linkedin.com/in/joakim-hedman/" className="personal-photo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div>
            <h2>Heya there. I'm Jocke</h2>
            <p>This is a paragraph about me and what I like to do, please enjoy!</p>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;
