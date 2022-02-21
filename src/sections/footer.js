import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

import GameImg1 from "../resources/images/eldenring.png";
import GameImg2 from "../resources/images/dyinglight2.jpg";
import GameImg3 from "../resources/images/valheim.png";

function InterestGameItem({ title, url, image }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" title={title}>
      <img src={image} alt="Anno 1800 cover art" />
    </a>
  );
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-interests">
            <p>The games I am currently playing:</p>
            <div>
              <InterestGameItem title={"Elden Ring"} image={GameImg1} url={"https://en.bandainamcoent.eu/elden-ring/elden-ring"} imageAlt={"Elden Ring cover art"} />
              <InterestGameItem title={"Dying Light 2"} image={GameImg2} url={"https://dl2.dyinglightgame.com/"} imageAlt={"Dying Light 2 cover art"} />
              <InterestGameItem title={"Valheim"} image={GameImg3} url={"https://www.valheimgame.com/"} imageAlt={"Valheim cover art"} />
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
