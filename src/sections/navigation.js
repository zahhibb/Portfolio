import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to={"/about"}>ABOUT ME</Link>
          </li>
          <li>
            <Link to={"/cv"}>CV</Link>
          </li>
          <li>
            <Link to={"/projects"}>PROJECTS</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
