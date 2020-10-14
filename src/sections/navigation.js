import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="nav-owner">
          <Link to={"/"}>Joakim Hedman</Link>
        </div>
        <ul>
          <li>
            <Link className="nav-active" to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/"}>PROJECTS</Link>
          </li>
          <li>
            <Link to={"/"}>CV</Link>
          </li>
          <li>
            <Link to={"/"}>ABOUT</Link>
          </li>
          <li>
            <Link to={"/"}>CONTACT</Link>
          </li>
        </ul>
        <div className="nav-socials">
          <span>a</span>
          <span>b</span>
        </div>
      </nav>
    );
  }
}

export default Navigation;
