import React, { useEffect } from "react";
import Navigation from "../components/Navigation/navigation";
import Footer from "../sections/footer";
import { Link } from "react-router-dom";
import "../App.css";

import AkinedImage01 from "../resources/images/akined_gameplay1.png";
import AkinedImage02 from "../resources/images/akined_gameplay2.png";
import AkinedImage03 from "../resources/images/akined_miro_planning.png";
import AkinedImage04 from "../resources/images/AKINED_LevelDesign_sketch.jpeg";
import AkinedImage05 from "../resources/images/paper-prototype-2.jpg";
import AkinedImage06 from "../resources/images/greybox-02.png";

import AkinedPossessMechanicGif from "../resources/images/possess_mechanic.gif";
import AkinedLeverSystemGif from "../resources/images/lever_system.gif";
import AkinedSoundCuesGif from "../resources/images/sound_cues.gif";

import GDD from "../resources/documents/AKINED - GDD.pdf";
import PostMortem from "../resources/documents/Post_Mortem_-_Game_Project_1_Akined_JoakimHedman.pdf";
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

const Akined = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <Navigation />
      <div className="page-container akined">
        <div className="page-banner">
          <div className="banner-overlay"></div>
          <h1>Akined</h1>
        </div>
        <div className="page-content" id="content">
          <section className="page-intro">
            <div className="page-intro-wrapper">
              <div className="status-panel">
                <StatusItem title={"Team Size"} content={["4"]} />
                <StatusItem
                  title={"Role"}
                  content={["Programmer", "Game Designer", "Level Designer"]}
                />
                <StatusItem title={"Duration"} content={["4 weeks"]} />
                <StatusItem title={"Engine"} content={["Unity"]} />
              </div>
              <div className="video-wrapper">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/mgAJ-adILGY"
                  title="Gameplay trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="files">
                <div>
                  <a
                    href="https://zahhibb.itch.io/akined"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play the game
                  </a>
                </div>
                <div>
                  <a href={GDD} target="_blank" rel="noopener noreferrer">
                    Read the GDD
                  </a>
                </div>
                <div>
                  <a
                    href={PostMortem}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the Post-Mortem
                  </a>
                </div>
              </div>
              <div className="definitions">
                <div>
                  <h2>Summary</h2>
                  <p>
                    <b>Akined</b> is an <i>Isometric Top-down Puzzle</i> game
                    where the player takes control of Adam and the Spirit
                    attached to him. The goal is to help Adam escape from the
                    dungeon that he suddenly woke up in through the help of the
                    Spirit which has the ability to possess objects.
                  </p>
                  <br />
                  <p>
                    The game was made in 4 weeks by 4 people; 2 UX designers and
                    2 Project managers, during my education at <a
                      href="https://futuregames.se/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FutureGames
                    </a>.
                  </p>
                </div>
                <div>
                  <h2>My contributions</h2>
                  <p>
                    While I initially was going to focus on UX and Level design
                    as is the direction of my studies and my interest, I had
                    to step up and be the programmer of this project because of
                    some unforeseen circumstances that both of the programmers
                    assigned to our team left the education.
                  </p>
                  <p>
                    I, fortunately, had some experience in <b>C# programming</b>{" "}
                    and <b>Unity</b> so we could still create a game, though we
                    had to re-scope the project a lot.
                  </p>
                  <br />
                  <p>
                    On this project, I worked on <b>programming</b>,{" "}
                    <b>level-</b> & <b>system design</b>.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="page-media">
            <div className="page-media-wrapper">
              <div className="image-grid">
                <img src={AkinedImage01} alt="Spirit power introduction" />
                <img src={AkinedImage02} alt="Possessing mechanic" />
              </div>
            </div>
          </section>
          <section className="page-section general">
            <div className="content-section-wrapper">
              <div className="content">
                <div className="image-container right">
                  <img
                    className="content-image"
                    src={AkinedImage03}
                    alt="Miro brainstorm board"
                  />
                  <span>Miro brainstorm board</span>
                </div>
                <h2>Concept</h2>
                <p>
                  The project began with brainstorming, pitching our ideas to
                  each other, and setting up an early schedule on how long we
                  could spend on specific tasks. We decided right away to spend
                  the entire first week on planning and conception to be
                  thorough and define what features we wanted in the final game.
                </p>
                <br />
                <p>
                  The concept we decided on was a combination of one of mine and
                  the other UX designer's ideas, which was a horror-Esque
                  puzzle game where you could switch between 2 characters; a
                  living human and a spirit/devil, trying to escape a house of
                  traps.
                </p>
                <br />
                <p>
                  The idea got defined a bit more and evolved into a
                  dungeon-escape game where the player has to use both of the
                  characters to interact with things in the environment and
                  possess objects out of reach.
                </p>
                <br />
                <br />
                <br />
                <h2>Process</h2>
                <p>
                  Our process came down to <b>sketching</b> and{" "}
                  <b>paper prototyping</b> at first, and when we felt we had
                  established our initial design we began with <b>greyboxing</b>{" "}
                  some basic levels/puzzles.
                </p>
                <div className="image-grid akined-process-items">
                  <div className="image-container">
                    <img src={AkinedImage04} alt="Paper sketch" />
                    <span>Paper sketch</span>
                  </div>
                  <div className="image-container">
                    <img src={AkinedImage05} alt="Paper protytype" />
                    <span>Paper prototype</span>
                  </div>
                  <div className="image-container">
                    <img src={AkinedImage06} alt="Greybox of level design" />
                    <span>Greybox (with some highlight assets)</span>
                  </div>
                </div>
                <p>
                  Together with the, at the time, sole programmer of our group
                  we set up the technical parts of the project -{" "}
                  <i>Unity project files</i>, <i>Version Control</i>, and{" "}
                  <i>code & file standards</i>. We worked steadily but
                  unfortunately our last and only programmer left the education
                  and I was the one with the most previous relevant technical
                  knowledge regarding Unity and C# programming.
                </p>
                <br />
                <p>
                  Now we had to be flexible, so we restructured the project and
                  I went to work on the main mechanics right away, and worked on
                  programming-related tasks for the rest of the project, while the other designer and the project managers work on everythng non-technical such as level-dressing, UI design, and music/sounds.
                </p>
                <br />
                <h2>Designs & systems I personally worked on</h2>
                <div className="work-pairs">
                  <iframe
                    className="akined-slideshow"
                    src="https://docs.google.com/presentation/d/e/2PACX-1vTTmNepDF68tYE4-bP_0QVawNsWw4ziwmYmFrwEh2pFQq0E1hi080F-Cdri3u_hUWn1DdxEl0RAw3-z/embed?start=false&loop=true&delayms=3000"
                    title="Paper prototype vs. end product"
                    frameborder="0"
                    allowfullscreen="true"
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                  ></iframe>
                  <p>Designed and implemented large parts of levels 1 & 3.</p>
                </div>
                <div className="work-pairs">
                  <img
                    src={AkinedPossessMechanicGif}
                    alt="Player possing box and bookshelf, and moving them around."
                  />
                  <p>
                    Developed a generalized possess mechanic that could work on
                    any entities in the game, provided they had relevant tags
                    and scripts attached to them.
                  </p>
                </div>
                <div className="work-pairs">
                  <img
                    src={AkinedLeverSystemGif}
                    alt="Player possessing valve and then using it to extend a bridge."
                  />
                  <p>
                    Versatile valve/lever system to handle a kind of parent{" "}
                    {"<"}-{">"} child hierarchy. Such as, a simple valve could
                    interact with various objects simultaneously and perform
                    different actions on each based on their states and what
                    exposed operations they had.
                  </p>
                </div>
                <div className="work-pairs">
                  <img
                    src={AkinedSoundCuesGif}
                    alt="Player clicking on 'Continue' button to see the next narration text, which is being printed out inside a small textbox."
                  />
                  <p>Narration & tutorial messaging with timed sound cues.</p>
                </div>
                <div>
                  <h2>Things we had to cut</h2>
                  <p>
                    These are some of the features that we had initially planned
                    to implement but had to be scrapped due to time constraints
                    and/or lack of knowledge.
                  </p>
                  <br />
                  <ul>
                    <li>
                      <p>
                        <u>
                          Tether mechanic & visuals between Adam and the Spirit
                        </u>
                      </p>
                      <p>
                        A swirling tether/link between Adam and the Spirit that
                        would emphasize their connection to each other. The link
                        was intended to be one of the main threats of the game,
                        which would break if the characters got too far
                        away from each other, resulting in death.
                      </p>
                      <p>
                        We felt this mechanic could be expanded on
                        later as a type of progression system to present more
                        intricate puzzles.
                      </p>
                    </li>
                    <li>
                      <p>
                        <u>Object-specific abilities of possessed entities</u>
                      </p>
                      <p>
                        Initially, we intended to have all objects in the
                        environment have specific abilities when possessed,
                        for example, turning on generators to power
                        magnets/conveyor belts or turning on/off lights to solve
                        light-related puzzles.
                      </p>
                    </li>
                    <li>
                      <p>
                        <u>Larger encompassing levels</u>
                      </p>
                      <p>
                        Our design at the start was to have a camera following
                        the player character throughout several smaller rooms in
                        a bigger level, where each "completed" room would serve
                        as a point to progress to the next level. The Player
                        would be free to roam between most of the rooms in any
                        way they want, to choose which puzzle to tackle first.
                      </p>
                      <p>
                        A lot of inspiration for this, both mechanically and
                        aesthetically, came from the game series <i>Luigi's Mansion</i>.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="page-media">
            <div className="page-media-wrapper video">
              <div className="video-wrapper">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/mgAJ-adILGY"
                  title="Gameplay trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section> */}
        </div>
        <div className="quick-links">
          <div className="quick-link-container prev">
            <Link to={projectQuickLinks[0].link}></Link>
            <span className="quick-link-text">Prev Project</span>
            <span className="quick-link-title">
              {projectQuickLinks[0].name}
            </span>
            <span className="quick-link-image"></span>
          </div>
          <div className="quick-link-container">
            <Link to={projectQuickLinks[2].link}></Link>
            <span className="quick-link-text">Next Project</span>
            <span className="quick-link-title">
              {projectQuickLinks[2].name}
            </span>
            <span className="quick-link-image"></span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Akined;
