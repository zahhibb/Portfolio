import React, { useEffect } from "react";
import Navigation from "../components/Navigation/navigation";
import Footer from "../sections/footer";

import personalImg from "../resources/images/UX_21_Joakim_Hedman_400.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="about" id="about">
      <Navigation />
      <div className="about-container">
        <div className="about-heading">
          <h1>Joakim Hedman</h1>
          <div>
            <h3 className="title-game">Game & UX Designer</h3>
          </div>
        </div>
        <div className="about-image-wrapper">
          <div>
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
            <div className="files">
              <div>
                <a
                  href="https://drive.google.com/file/d/14ulru9xKXEH6OfW59t-EMCuPzr3yVJSr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Resume link"
                >
                  View my resume
                </a>
              </div>
            </div>
          </div>
          <img src={personalImg} alt="Joakim Hedman" />
        </div>
        <div className="about-content">
          <div className="about-me">
            <div className="what-can-i-do">
              <h3>
                <u>What can I do?</u>
              </h3>
              <div className="list-container">
                <ul>
                  <li>
                    <span>System design</span>
                  </li>
                  <li>Level design</li>
                  <li>Scripting (C#, UE Blueprints)</li>
                  <li>Ideation & brainstorming</li>
                </ul>
                <ul>
                  <li>UX-research & testing</li>
                  <li>Wireframing</li>
                  <li>Rapid prototyping</li>
                </ul>
              </div>
            </div>
            <div className="who-am-i">
              <h3>
                <u>Who am I?</u>
              </h3>
              <p>
                I see myself as an honest, jolly, and proactive guy with
                enormous curiosity in games and game development. Some of the things
                that I enjoy are helping people out and solving problems.
                In general, I simply love trying out new things in life, be it
                 devouring new kinds of food, experiencing different
                cultures, to taking on all manner of jobs that I can get my
                hands on!
              </p>
              <br />
              <p>
                My interest in making and modifying games began in the late 90s
                when I got curious and began editing values of game files to
                modify the stats of units inside{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Heroes of Might and Magic 3
                </a>
                , <i>one of my favorite games of all time</i>.
              </p>
              <p>
                Further down the line, I began messing around with map editors in{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Warcraft_III:_The_Frozen_Throne"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Warcraft 3
                </a>{" "}
                and{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Crysis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Crysis
                </a>
                , where I at the time interacted with and grew a small community
                of users and creators.
              </p>
            </div>
            <div className="as-a-developer">
              <h3>
                <u>As a developer</u>
              </h3>
              <p>
                I try my hardest to have laser focus on the task at hand and
                enjoy delving down into the nitty-gritty details. I put a lot of
                emphasis on defining ideas and my approach is to break them down
                into bite-sized systems and mechanics, and further using what I learned to
                plan out a thorough plan of action.
              </p>
              <br />
              <p>
                I consider my strengths to be my technical experience and the
                general knowledge I have on the various disciplines inside game
                development, combined with my design-thinking with focus on
                player agency and intrinsic motivations. My workflows are
                inherently practical where I ideate, design, and prototype using
                tangible tools and methods such as card-sorting,
                paper-prototyping, and various other techniques that I've
                learned from my extensive experience with making games at{" "}
                <i>GameJams.</i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
