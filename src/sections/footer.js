import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

import GameImg1 from "../resources/images/eldenring.png";
import GameImg2 from "../resources/images/dyinglight2.jpg";
import GameImg3 from "../resources/images/valheim.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-interests">
            <p>The games I am currently playing:</p>
            <div>
              <a href="https://www.ubisoft.com/en-gb/game/anno/1800" target="_blank" rel="noopener noreferrer"><img src={GameImg1} alt="Anno 1800 cover art" /></a>
              <a href="https://store.steampowered.com/app/1426450/Age_of_Darkness_Final_Stand/" target="_blank" rel="noopener noreferrer"><img src={GameImg2} alt="Age of Darkness cover art" /></a>
              <a href="https://store.steampowered.com/app/690830/Foundation/" target="_blank" rel="noopener noreferrer"><img src={GameImg3} alt="Foundation cover art" /></a>
            </div>
          </div>
          <div className="footer-details">
            <p>Reach out to me on any of these channels:</p>
            <div>
              <a href="https://www.linkedin.com/in/joakim-hedman/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/Zahhibb" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.artstation.com/zahhibb" target="_blank" rel="noopener noreferrer">ArtStation</a>
              <a href="mailto:jocke_hedman@hotmail.com">Email</a>
            </div>
          </div>
          <div className="copyright">
            <span>&#169;</span>
            <span>{(new Date().getFullYear())}</span>
            <span>Joakim Hedman</span>
            <span>|</span>
            <Link to={"/credits"}>Credits</Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
