import React, { useEffect } from "react";
import Navigation from "../components/Navigation/navigation";
import Footer from "../sections/footer";
import { Link } from "react-router-dom";
import "../App.css";

// import EldenRingStylesheet from "../resources/images/Typography_and_Colours.png";
// import EldenRingIconography from "../resources/images/Iconography.png";
// import EldenRingIconIteration from "../resources/images/Icon-iteration.png";
import EldenRingHighFidelityWireframe01 from "../resources/images/Main-menu.png";
import EldenRingHighFidelityWireframe02 from "../resources/images/Character-creation_Class.png";
import EldenRingHighFidelityWireframe03 from "../resources/images/Character-creation_Stats.png";

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
                    This is a <strong>personal project</strong> where I wanted to <strong>develop my UX
                      and UI design skills</strong> further. Elden Ring was at the time an
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
              <h2>Theme</h2>
              <p>With the identical goal as my other project, <Link to={"/battlefield6"}></Link>, I wanted to imagine and present a updated UI/HUD but this time for <strong>Elden Ring</strong>. My considerations for this particular project was also to try to match the aesthetics of previous <i>"Souls"</i> titles of <a
                href="https://www.fromsoftware.jp/ww/"
                target="_blank"
                rel="noopener noreferrer"
              >FROM SOFTWARE</a>, but also trying to be a bit for <strong>imaginative</strong> and preferably make it a bit more <strong>modern</strong> as a common trope of the <i>"Souls"</i> games' UI is that they are functional, but not beautiful.</p>
              <br />
              {/* <div className="work-pairs">
                <img
                  className="content-image"
                  src={EldenRingStylesheet}
                  alt="Stylesheet showing and describing what fonts, colors, and forms was used for the project"
                />
                <div>
                  <h3>Stylesheet</h3>
                  <p>asd</p>
                </div>
              </div>
              <div className="work-pairs">
                <img
                  className="content-image"
                  src={EldenRingStylesheet}
                  alt="Sketches and low-fidelity wireframes of the menus"
                />
                <div>
                  <h3>Sketching & wireframing</h3>
                  <p>asd</p>
                </div>
              </div>
              <div className="image-duo">
                <div>
                  <h3>Icon iteration</h3>
                  <p>asd</p>
                  <img src={EldenRingIconIteration} alt="asd" />
                </div>
                <div>
                  <h3>Iconography</h3>
                  <p>asd</p>
                  <img src={EldenRingIconography} alt="asd" />
                </div>
              </div>
              <br /> */}
              <h2>High-fidelity wireframes</h2>
              {/* <p>asd</p> */}
              <br />
              <div className="image-grid">
                <img src={EldenRingHighFidelityWireframe01} alt="High-fidelity wireframe of the main menu" />
                <img src={EldenRingHighFidelityWireframe02} alt="High-fidelity wireframe of character creation screen" />
                <img src={EldenRingHighFidelityWireframe03} alt="High-fidelity wireframe of the class selection panel on the character creation screen" />
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
