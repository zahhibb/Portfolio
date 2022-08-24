import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import personalImg from "../resources/images/profile_joakim-hedman.png";
import { motion } from "framer-motion"

export var projectQuickLinks = [
  {
    name: "battlerite",
    link: "/battlerite",
  },
  {
    name: "akined",
    link: "/akined",
  },
  // {
  //   name: "eldritch",
  //   link: "/eldritch",
  // },
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

function ProjectItem({ title, description, tag2, url, imgClass, tag }) {
  return (
    <div className="project-item-container">
      <div className={"project-item " + imgClass}>
        <Link to={url}>
          <span className="overlay"></span>
          <p className="item-title">{title}</p>
          <span className="item-desc">{description}</span>
        </Link>
        <span className="tag">{tag}</span>
        <span className="tag2">{tag2}</span>
        <div className="mobile-bar">
          <span className="mobile-bar-title">{title}</span>
          <span className="mobile-bar-desc">{description}</span>
        </div>
      </div>
    </div>
  );
}

// function OtherProjectItem({ title, description, url, imgClass, tag }) {
//   return (
//     <div className="other-project-item-container">
//       <div className={"other-project-item " + imgClass}>
//         <Link to={url}>
//           <span className="overlay"></span>
//           <p className="other-item-title">{title}</p>
//           <span className="other-item-desc">{description}</span>
//         </Link>
//         <span className="tag">{tag}</span>
//         <div className="mobile-bar">
//           <span className="mobile-bar-title">{title}</span>
//           <span className="mobile-bar-desc">{description}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="intro" id="home">
        <div className="intro-container">
          <motion.div className="intro-heading" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1>Joakim Hedman</h1>
            <div>
              <h3 className="title-game">Game & UX Designer</h3>
            </div>
          </motion.div>
          <motion.div className="intro-content" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
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
              <p>I consider myself a multidisciplinary designer that enjoy diving deep into <span className="color-block">Intrinsic gameplay design</span>, <span className="color-block">UI design</span>, and more.</p>
              <div className="social-links">
                <div className="linkedin">
                  <a
                    href="https://www.linkedin.com/in/joakim-hedman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn link"
                  >
                    <span className="text">LinkedIn</span>
                  </a>
                </div>
                <div className="artstation">
                  <a
                    href="https://www.artstation.com/zahhibb"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="ArtStation link"
                  >
                    <span className="text">ArtStation</span>
                  </a>
                </div>
                <div className="itch">
                  <a
                    href="https://zahhibb.itch.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Itch.io link"
                  >
                    <span className="text">Itch.io</span>
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
                    <span className="text">Mail</span>
                  </a>
                </div>
              </div>
            </div>
            <img src={personalImg} alt="Joakim Hedman" />
          </motion.div>

        </div>
      </section>
      <section className="projects">
        <motion.div className="projects-container" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
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
                  tag2={"Professional project"}
                />
                <ProjectItem
                  title={"Akined"}
                  description={"Isometric 3D Puzzle Platformer"}
                  url={"/akined"}
                  imgClass={"akined"}
                  tag={"Programming & Game design"}
                  tag2={"Student project"}
                />
                {/* <ProjectItem
                  title={'Eldritch'}
                  description={"Rogue-like Card game"}
                  url={"/eldritch"}
                  imgClass={"eldritch"}
                  tag={"UX/UI design"}
                  tag2={"Student project"}
                /> */}
                <ProjectItem
                  title={'"Pioneer"'}
                  description={"FPS UI concept"}
                  url={"/pioneer"}
                  imgClass={"pioneer"}
                  tag={"UX/UI design"}
                  tag2={"Student project"}
                />
                <ProjectItem
                  title={'Battlefield "6"'}
                  description={"Personal | UI concept"}
                  url={"/battlefield6"}
                  imgClass={"battlefield6"}
                  tag={"UX/UI design"}
                  tag2={"Personal/fan project"}
                />
                <ProjectItem
                  title={"Elden Ring"}
                  description={"Personal | UX/UI concept"}
                  url={"/eldenring"}
                  imgClass={"eldenring"}
                  tag={"UX/UI design"}
                  tag2={"Personal/fan project"}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Index;
