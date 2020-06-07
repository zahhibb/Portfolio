import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div>
            <i className="far fa-copyright"></i>
            <p>2020 Joakim Hedman - All Rights Reserved</p>
          </div>
          <span>|</span>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/joakim-hedman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/zahhibb?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
