import React from "react";
import "../App.css";

const Intro = () => {
  return (
    <section className="intro" id="home">
      <div className="intro-container">
        <div className="intro-heading">
          <h1>Joakim Hedman</h1>
          <div>
            <h3 className="title-game">Game & UX Designer</h3>
          </div>
        </div>
        <div className="intro-description">
          <p>Hi there!</p>
          <p className="paragraph">My name is Joakim and I am a <strong>Game and UX designer</strong>.</p>
          <p className="paragraph">Below you will find some of my highlighted projects, both in Game- and Web development, professional and personal.</p>
          <div className="social-links">
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/joakim-hedman/" target="_blank" rel="noopener noreferrer" title="LinkedIn">LinkedIn</a>
            </div>
            <div className="twitter">
              <a href="https://twitter.com/Zahhibb" target="_blank" rel="noopener noreferrer" title="Twitter">Twitter</a>
            </div>
            <div className="mail">
              <a href="mailto:jocke_hedman@hotmail.com" title="Mail">Mail</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
