import React, { Component } from "react";
import "../App.css";

class AboutSection extends Component {
  render() {
    return (
      <section className="about">
        <p>
          <b>Hi there, and welcome!</b>
        </p>
        <p>
          My name is Joakim Hedman and I'm a 29 year old currently living in
          Skövde, Sweden. Throughout my life so far I've studied a lot with
          focus on IT, so the generalist title is mostly self proclaimed.
          Nonetheless I enjoy two particular things in IT; be it from
          designing and developing websites using <b>PHP</b>, <b>JavaScript</b>{" "}
          and <b>ReactJS</b>, to developing my own games or participating in{" "}
          <a href="https://itch.io/jams">Game Jams</a> using <b>Unity</b> or{" "}
          <b>Unreal Engine</b>.
        </p>
        <br />
        <p>
          I've had the pleasure to have worked both in the game development and
          web development industries, however, recently I got laid off from web dev. studio because of
          the current COVID-19 situation and{" "}
          <b>I'm currently looking for new exciting opportunities!</b>
        </p>
        <br/>        
      </section>
    );
  }
}

export default AboutSection;
