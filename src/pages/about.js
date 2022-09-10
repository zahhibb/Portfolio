import React, { useEffect } from 'react'
import Navigation from '../components/Navigation/navigation'
import Footer from '../sections/footer'
import { motion } from "framer-motion"
import personalImg from '../resources/images/profile_joakim-hedman_02.jpg'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="about" id="about">
      <Navigation />
      <div className="about-container">
        <motion.div className="about-heading" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1>Joakim Hedman</h1>
          <div>
            <h3 className="title-game">Game & UX Designer</h3>
          </div>
        </motion.div>

        <motion.div className="about-image-wrapper" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <div>
            <div className="social-links">
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/joakim-hedman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn link"
                >
                  <span className='text'>LinkedIn</span>
                </a>
              </div>
              <div className="artstation">
                <a
                  href="https://www.artstation.com/zahhibb"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="ArtStation link"
                >
                  <span className='text'>ArtStation</span>
                </a>
              </div>
              <div className="itch">
                <a
                  href="https://zahhibb.itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Itch.io link"
                >
                  <span className='text'>Itch.io</span>
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
                  <span className='text'>Mail</span>
                </a>
              </div>
            </div>
            <div className="files">
              <div>
                <a
                  href="https://drive.google.com/file/d/1Tnha84yGYDX90_Tg4Fdca2EaJiqP5JZw/view?usp=sharing"
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
        </motion.div>

        <div className="about-content">
          <div className="about-me">

            <motion.div className="what-can-i-do" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
              <h3>
                <u>What can I do?</u>
              </h3>
              <div className="list-container">
                <ul>
                  <li>UI design & Wireframing</li>
                  <li>System design</li>
                  <li>Level design</li>
                  <li>Scripting (C#, UE Blueprints)</li>
                </ul>
                <ul>
                  <li>UX-research & testing</li>
                  <li>Rapid prototyping</li>
                  <li>Ideation & brainstorming</li>
                  <li>Web development (HTML5, CSS3, JavaScript)</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="who-am-i" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
              <h3>
                <u>Who am I?</u>
              </h3>
              <p>
                I see myself as an honest, jolly, and proactive guy with
                enormous curiosity in games and game development. Some of the
                things that I enjoy are helping people out and solving problems.
                In general, I simply love trying out new things in life, be it
                devouring new kinds of food, experiencing different cultures,
                and saying "Yes!" to all opportunities that come my way!
              </p>
              <br />
              <p>
                My interest in making and modifying games began in the late 90s
                when I got curious and began editing the values of game files to
                modify the stats of units inside of{' '}
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
                Further down the line, I began messing around with map editors
                in{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Warcraft_III:_The_Frozen_Throne"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Warcraft 3
                </a>{' '}
                and{' '}
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
            </motion.div>

            <motion.div className="as-a-developer" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
              <h3>
                <u>As a designer</u>
              </h3>
              {/* <p>
                I try my hardest to have laser focus on the task at hand and
                enjoy delving down into the nitty-gritty details. I put a lot of
                emphasis on defining ideas and my approach is to break them down
                into bite-sized systems and mechanics, and further using what I
                learned to plan out a thorough plan of action.
              </p> */}
              <p>Multitasking is what I enjoy and is also what I excel at by always keeping myself busy with various tasks and concentrating on being efficient. I put a lot of
                emphasis on defining ideas and my approach is to break them down
                into bite-sized systems and mechanics, and further using what I
                learned to plan out a thorough plan of action.</p>
              <br />
              <p>
                I consider my strengths to be my technical understanding and the
                general knowledge I have on the various disciplines inside game
                development, combined with my design-thinking with focus on
                player agency and intrinsic motivations. My workflows are
                inherently practical where I ideate, design, and prototype using
                tangible tools and methods such as <i>card-sorting</i>, {" "}
                <i>paper-prototyping</i>, and various other techniques that I've
                gathered from my experience with making games at{' '}
                <i>GameJams.</i>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default About
