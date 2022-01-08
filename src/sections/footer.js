import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="copyright">
            <span>&#169; {(new Date().getFullYear())}</span>
            <span>Joakim Hedman</span>
          </div>
          <span>|</span>
          <p><Link to={"/credits"}>Credits</Link></p>
        </div>
      </footer>
    );
  }
}

export default Footer;
