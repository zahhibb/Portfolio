import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <p>&#169; Copyright 2021 Joakim Hedman</p>
          <span>|</span>
          <p><Link to={"/credits"}>Credits</Link></p>
        </div>
      </footer>
    );
  }
}

export default Footer;
