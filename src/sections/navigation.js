import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Navigation extends Component {
  render() {
    return (
      <nav className="desktop-navigation">
        <div className="nav-owner">
          <Link to={"/"}>Joakim Hedman</Link>
        </div>
        <ul>
          <li>
            <Link className="nav-active" to={"/#home"}>HOME</Link>
          </li>
          <li>
            {/* <Link to={"/"}>PROJECTS</Link> */}
            <a href="/#projects">PROJECTS</a>
          </li>
          <li>
            {/* <Link to={"/"}>CV</Link> */}
            <a href="/#cv">CV</a>
          </li>
          <li>
            {/* <Link to={"/"}>ABOUT</Link> */}
            <a href="/#about">ABOUT</a>
          </li>
          <li>
            {/* <Link to={"/"}>CONTACT</Link> */}
            <a href="/#contact">CONTACT</a>
          </li>
        </ul>
        <div className="nav-socials">
          <span className="linkedin">
            {/* <Link to={"https://www.linkedin.com/in/joakim-hedman/"}></Link> */}
            <a href="https://www.linkedin.com/in/joakim-hedman/" target="_blank" rel="noopener noreferrer"></a>
          </span>
        </div>
        <div className="mobile-navigation-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    );
  }
}

export default Navigation;
