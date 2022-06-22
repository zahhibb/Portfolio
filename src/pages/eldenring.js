import React, { useEffect } from "react";
import Navigation from "../components/Navigation/navigation";
import Footer from "../sections/footer";
import { Link } from "react-router-dom";
import "../App.css";

import EldenRingImage02 from "../resources/images/Icon-iteration.png";
import EldenRingImage03 from "../resources/images/Main-menu.png";
import EldenRingImage04 from "../resources/images/Iconography.png";
import EldenRingImage05 from "../resources/images/Typography_and_Colours.png";
import EldenRingImage06 from "../resources/images/Character-creation_Class.png";
import EldenRingImage07 from "../resources/images/Character-creation_Stats.png";

import { projectQuickLinks } from "./index";

function StatusItem({ title, content }) {
  let contentList = content.map((item, key) => <h3 key={key}>{item}</h3>);
  return (
    <div className="status-item">
      <h3>{title}</h3>
      {contentList}
    </div>
  );
}

const Eldenring = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <Navigation />
      <div className="page-container eldenring">
        <div className="page-banner">
          <div className="banner-overlay"></div>
          <h1>Elden Ring UI concept</h1>
        </div>
        <div className="page-content" id="content">
          <section className="page-intro">
            <div className="page-intro-wrapper">
              <div className="status-panel">
                <StatusItem title={"Team Size"} content={["1 (Personal)"]} />
                <StatusItem
                  title={"Duration"}
                  content={["4 days (across 3 weeks)"]}
                />
                <StatusItem
                  title={"Tools"}
                  content={["Adobe [XD, Photoshop, Illustrator]"]}
                />
              </div>
              <div className="files">
                <div>
                  <a
                    href="https://www.artstation.com/artwork/mzZQ41"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on ArtStation
                  </a>
                </div>
              </div>
              <div className="definitions">
                <div>
                  <h2>Project overview</h2>
                  <p>
                    This is a personal project where I wanted to develop my UX
                    and UI design skills further. Elden Ring was at the time an
                    upcoming game but almost nothing was yet revealed about it,
                    so I wanted to try and imitate the <b>FROM SOFTWARE</b>{" "}
                    style.
                  </p>
                  <br />
                  <p>
                    My intention was as well to make it a bit more modern or
                    different at the very least.
                  </p>
                </div>
                <div>
                  <h2>What I did</h2>
                  <p>
                    I ended up making a <b>Main menu</b> and{" "}
                    <b>Character Creation</b> page concept. My goal was to make
                    a gameplay HUD as well but unfortunately for me more footage
                    was shown for Elden Ring and they showed-off the HUD so I
                    lost a bit of inspiration and finished what I already had.
                  </p>
                  <br />
                  <p>
                    Additionally I made a few stylesheets for icons, fonts, and
                    colours.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="page-media">
            <div className="page-media-wrapper">
              <h2>Concept</h2>
              <p>content coming soon..</p>
              <br />
              <h2>Process</h2>
              <p>content coming soon..</p>
              <br />
              <div className="image-grid">
                <img src={EldenRingImage02} alt="elden ring 2" />
                <img src={EldenRingImage03} alt="elden ring 3" />
                <img src={EldenRingImage04} alt="elden ring 4" />
                <img src={EldenRingImage05} alt="elden ring 5" />
                <img src={EldenRingImage06} alt="elden ring 6" />
                <img src={EldenRingImage07} alt="elden ring 7" />
              </div>
            </div>
          </section>
        </div>
        <div className="quick-links">
          <div className="quick-link-container prev">
            <Link to={projectQuickLinks[3].link}></Link>
            <span className="quick-link-text">Prev Project</span>
            <span className="quick-link-title">
              {projectQuickLinks[3].name}
            </span>
            <span className="quick-link-image"></span>
          </div>
          <div className="quick-link-container">
            <Link to={projectQuickLinks[0].link}></Link>
            <span className="quick-link-text">Next Project</span>
            <span className="quick-link-title">
              {projectQuickLinks[0].name}
            </span>
            <span className="quick-link-image"></span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Eldenring;
