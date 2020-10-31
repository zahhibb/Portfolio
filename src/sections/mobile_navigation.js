import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class MobileNavigation extends Component {
  render() {
    return (
      <nav className="mobile-navigation">
          <div className="mobile-nav-cover">
              <ul>
                  <li className="nav-owner">
                      <Link to={"/"}>Joakim Hedman</Link>
                  </li>
                  <li>
                      <Link to={"/#home"}>HOME</Link>
                  </li>
                  <li>
                      <Link to={"/#projects"}>PROJECTS</Link>
                  </li>
                  <li>
                      <Link to={"/#cv"}>CV</Link>
                  </li>
                  <li>
                      <Link to={"/#about"}>ABOUT</Link>
                  </li>
                  <li>
                      <Link to={"/#contact"}>CONTACT</Link>
                  </li>
              </ul>
          </div>
      </nav>
    );
  }
}

export default MobileNavigation;
