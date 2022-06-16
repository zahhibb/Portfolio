import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import personalImg from "../resources/images/UX_21_Joakim_Hedman_400.png";

export var projectQuickLinks = [
  {
    name: "battlerite",
    link: "/battlerite",
  },
  {
    name: "akined",
    link: "/akined",
  },
  {
    name: '"Pioneer" UI',
    link: "/pioneer",
  },
  {
    name: 'Battlefield "6" UI',
    link: "/battlefield6",
  },
  {
    name: "Elden Ring UI",
    link: "/eldenring",
  },
];

function ProjectItem({ title, description, url, imgClass, tag }) {
  return (
    <div className="project-item-container">
      <div className={"project-item " + imgClass}>
        <Link to={url}>
          <span className="overlay"></span>
          <p className="item-title">{title}</p>
          <span className="item-desc">{description}</span>
        </Link>
        <span className="tag">{tag}</span>
        <div className="mobile-bar">
          <span className="mobile-bar-title">{title}</span>
          <span className="mobile-bar-desc">{description}</span>
        </div>
      </div>
    </div>
  );
}

function OtherProjectItem({ title, description, url, imgClass, tag }) {
  return (
    <div className="other-project-item-container">
      <div className={"other-project-item " + imgClass}>
        <Link to={url}>
          <span className="overlay"></span>
          <p className="other-item-title">{title}</p>
          <span className="other-item-desc">{description}</span>
        </Link>
        <span className="tag">{tag}</span>
        <div className="mobile-bar">
          <span className="mobile-bar-title">{title}</span>
          <span className="mobile-bar-desc">{description}</span>
        </div>
      </div>
    </div>
  );
}

function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="intro" id="home">
        <div className="intro-container">
          <div className="intro-heading">
            <h1>Joakim Hedman</h1>
            <div>
              <h3 className="title-game">Game & UX Designer</h3>
            </div>
          </div>
          <div className="intro-content">
            <div className="intro-description">
              <p>
                I'm a <strong>Game and UX designer</strong> currently studying at <a
                  href="https://futuregames.se/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FutureGames
                </a> in Skellefteå, Sweden.
              </p>
              <p>I consider myself a multidisciplinary game designer that enjoy diving deep into <span className="color-block">Intrinsic game design</span>, <span className="color-block">Level design</span>, and <span className="color-block">UI design</span>.</p>
              <div className="social-links">
                <div className="linkedin">
                  <a
                    href="https://www.linkedin.com/in/joakim-hedman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn link"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="artstation">
                  <a
                    href="https://www.artstation.com/zahhibb"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="ArtStation link"
                  >
                    ArtStation
                  </a>
                </div>
                <div className="itch">
                  <a
                    href="https://zahhibb.itch.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Itch.io link"
                  >
                    Itch.io
                  </a>
                </div>
                {/* <div className="twitter">
                <a
                  href="https://twitter.com/Zahhibb"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter link"
                >
                  Twitter
                </a>
              </div> */}
                <div className="mail">
                  <a
                    href="mailto:jocke_hedman@hotmail.com"
                    title="Direct mail link"
                  >
                    Mail
                  </a>
                </div>
              </div>
            </div>
            <img src={personalImg} alt="Joakim Hedman" />
          </div>

        </div>
      </section>
      <section className="projects">
        <div className="projects-container">
          <h2>Highlighted projects</h2>
          <div className="projects-list">
            <div className="projects-games">
              <div className="games-list">
                <ProjectItem
                  title={"Battlerite"}
                  description={"Professional/internship projects"}
                  url={"/battlerite"}
                  imgClass={"battlerite"}
                  tag={"Programming & Game design"}
                />
                <ProjectItem
                  title={"Akined"}
                  description={"Isometric 3D Puzzle Platformer"}
                  url={"/akined"}
                  imgClass={"akined"}
                  tag={"Programming & Game design"}
                />
                <ProjectItem
                  title={'"Pioneer"'}
                  description={"FPS UI"}
                  url={"/pioneer"}
                  imgClass={"pioneer"}
                  tag={"UX/UI design"}
                />
                <ProjectItem
                  title={'Battlefield "6"'}
                  description={"UI concept"}
                  url={"/battlefield6"}
                  imgClass={"battlefield6"}
                  tag={"UI design"}
                />
                <ProjectItem
                  title={"Elden Ring"}
                  description={"UX/UI concept"}
                  url={"/eldenring"}
                  imgClass={"eldenring"}
                  tag={"UX/UI"}
                />
              </div>
            </div>
            <hr />
            {/* <div className="other-projects">
              <h2>Other projects</h2>
              <div className="other-projects-list">
                <OtherProjectItem
                  title={"Elden Ring UI concept"}
                  description={"Personal project"}
                  url={"/eldenring"}
                  imgClass={"eldenring"}
                  tag={"UX/UI"}
                />
                <OtherProjectItem
                  title={"Outvaders Must Die"}
                  description={"Nordic Game Jam 2016"}
                  url={"/outvadersmustdie"}
                  imgClass={"outvaders"}
                  tag={"Scripting & Game design"}
                />
                <OtherProjectItem
                  title={"Canvas Climber"}
                  description={"School game project"}
                  url={"/canvasclimber"}
                  imgClass={"canvasclimber"}
                  tag={"Scripting & UI pixel art"}
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
