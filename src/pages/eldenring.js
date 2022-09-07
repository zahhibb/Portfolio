import React, { useEffect } from 'react'
import Navigation from '../components/Navigation/navigation'
import Footer from '../sections/footer'
import { Link } from 'react-router-dom'
import '../App.css'
import Zoom from 'react-medium-image-zoom'
import '../styles.css'
import { motion } from "framer-motion"

import EldenRingLowFidelityWireframes from '../resources/images/eldenring_low-fidelity_wireframes.jpg'
import EldenRingIdeationData from '../resources/images/eldenring_ideation_defined-data.jpg'
import EldenRingStylesheet from "../resources/images/eldenring_typography-and-colours.png";
import EldenRingIconIteration from "../resources/images/eldenring_icon-iteration.jpg";
import EldenRingIconography from "../resources/images/eldenring_iconography.png";
import EldenRingHighFidelityWireframe01 from '../resources/images/eldenring_high-fidelity_wireframes_main-menu.png'
import EldenRingHighFidelityWireframe02 from '../resources/images/eldenring_high-fidelity_wireframes_character-creation-class.png'
import EldenRingHighFidelityWireframe03 from '../resources/images/eldenring_high-fidelity_wireframes_character-creation-stats.png'

import { projectQuickLinks } from './index'

function StatusItem({ title, content }) {
  let contentList = content.map((item, key) => <h3 key={key}>{item.title}</h3>)
  return (
    <div className="status-item">
      <h3>{title}</h3>
      {contentList}
    </div>
  )
}

const Eldenring = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

              <motion.div className="status-panel" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                <StatusItem
                  title={'Team Size'}
                  content={[{ title: '1 (solo)' }]}
                />
                <StatusItem
                  title={'Duration'}
                  content={[
                    { title: '[96 hours — across 3 weeks]' },
                    { title: 'Aug 2021' },
                  ]}
                />
                <StatusItem
                  title={'Software & Tools'}
                  content={[
                    { title: '[Adobe]' },
                    { title: 'XD, Photoshop, Illustrator' },
                  ]}
                />
              </motion.div>

              <motion.div className="files" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div>
                  <a
                    href="https://www.artstation.com/artwork/mzZQ41"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on ArtStation
                  </a>
                </div>
              </motion.div>

              <motion.div className="definitions" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
                <div>
                  <h2>Project overview</h2>
                  <p>
                    This is a <strong>personal fan project</strong> where I wanted
                    to <strong>develop my UX and UI design skills</strong>{' '}
                    further. Elden Ring was at the time an upcoming game but
                    almost nothing was yet revealed about it, so I wanted to try
                    and imitate the <strong>FROM SOFTWARE</strong> style.
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
                    I ended up making a <strong>Main menu</strong> and{' '}
                    <strong>Character Creation</strong> page concept. My goal was to make
                    a gameplay HUD as well but unfortunately for me more footage
                    was shown for Elden Ring and they showed off the HUD so I
                    lost a bit of inspiration and finished what I already had.
                  </p>
                  <br />
                  <p>
                    Additionally, I made a few stylesheets for icons, fonts, and
                    colors.
                  </p>
                </div>
              </motion.div>

            </div>
          </section>

          <motion.div className="page-media" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
            <div className="page-media-wrapper">
              <h2>Theme</h2>
              <p>
                With the identical goal as my other fan project, the {" "}
                <Link to={'/battlefield6'}>Battlefield 6 UI concept</Link>, I wanted to
                imagine and present an updated UI/HUD but this time for{' '}
                <strong>Elden Ring</strong>. My considerations for this
                particular project were also to try to match the aesthetics of
                previous <i>Souls</i> titles of{' '}
                <a
                  href="https://www.fromsoftware.jp/ww/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FROM SOFTWARE
                </a>
                , but also attempt to be <strong>imaginative</strong>{' '}
                and preferably make it a bit more <strong>modern</strong> as a
                common trope of the <i>Souls</i> games' UI is that they are
                functional, but not necessarily aesthetically pleasing.
              </p>
              <br />

              <Zoom>
                <div className="work-pairs">
                  <img
                    className="content-image"
                    src={EldenRingIdeationData}
                    alt="Two whiteboard sketches and post-its defining various variables and data"
                  />
                  <div>
                    <h2>Defining data</h2>
                    <p>
                      As per usual I started this project by doing some sketches, breaking apart and defining all data points available and what could be needed. I did this very simply by writing them out on post-its and placing them on a whiteboard, simply to gauge visually what I had to work with.
                    </p>
                    <p>As this project was to be mainly menus there weren't a lot of data needed to consider.</p>
                  </div>
                </div>
              </Zoom>

              <Zoom>
                <div className="work-pairs">
                  <img
                    className="content-image"
                    src={EldenRingLowFidelityWireframes}
                    alt="Four low-fidelity wireframes of a character creation menu"
                  />
                  <div>
                    <h2>Low-fidelity wireframes</h2>
                    <p>
                      When creating the initial wireframes I primarily considered and iterated on the <strong>layout</strong> of previously defined data, blocking out all elements quite crudely. There were several other designs other than those shown here, though they were even more basic and not necessarily interesting.
                    </p>
                    <p>The design I went forward with was <strong>2.1.</strong>, one reason being that I quite enjoyed the asymmetrical look of it, and could be fun working with. The other reason being that after some consideration that I should first try going for and design a more traditional <i>From Software</i> look and then possibly evolve it from there, just to get a feel for it.</p>
                  </div>
                </div>
              </Zoom>

              <Zoom>
                <div className="work-pairs">
                  <img
                    className="content-image"
                    src={EldenRingStylesheet}
                    alt="Stylesheet describing typography, colours, and aesthetics"
                  />
                  <div>
                    <h2>Stylesheet</h2>
                    <p>When I felt comfortable with the layout and had a direction, I jumped on the task of designing a stylesheet, and defining <strong>colours</strong>, <strong>typography</strong>, and <strong>silhouettes/aesthetics</strong>.</p>
                    <p>In hindsight, I should have formulated some additional data, such as <strong>flowcharts</strong>, <strong>rules/guidelines</strong> <i>(paddings, margins, depth, layering, etc)</i>, <strong>shape language</strong>, <strong>animation</strong> <i>(easing, flow)</i>, and a more prevalent <strong>core thematic</strong>.
                    </p>
                    <p>Regarding the <i>typography</i>, only the fonts were taken into account, but after the project I researched and deepened my understanding of <i>kerning</i>, <i>leading</i>, and <i>tracking</i>.</p>
                  </div>
                </div>
              </Zoom>

              <div className="image-duo">
                <div>
                  <h2>Icon iteration</h2>
                  <p>
                    In between designs, I did try my hand once again at creating some icons mainly using the <i>pen tool</i> inside <strong>Adobe XD</strong>, making "art" for  all of the character stats. <p>I didn't spend a lot of time on this but I always look forward to doing these simple drawings and improving my art skills.</p>
                  </p>
                  <Zoom>
                    <img
                      src={EldenRingIconIteration}
                      alt="Iterations of several icons of the character stats"
                    />
                  </Zoom>
                </div>
                <div>
                  <h2>Iconography</h2>
                  <p>
                    Continuing from the icon <i>sketching & iteration</i> part I additionally made a descriptive iconography "guide"/intention sheet. With this, I wanted to somewhat explain my purpose with the <strong>icons</strong>, <strong>frames</strong>, and <strong>accents</strong>.
                  </p>
                  <Zoom>
                    <img
                      src={EldenRingIconography}
                      alt="Iconography description highlighting intentions behind each icon"
                    />
                  </Zoom>
                </div>
              </div>
              <br />

              <h2>High-fidelity wireframes</h2>
              <p>
                Finally, I went on to the <i>high-fidelity wireframes</i> that conclude and bring everything to life. This is my favorite part, but also the part I was worried about because it's meant to present a <i>'what if'</i> situation of the screens if they were to be production ready, and I feel it's hard as a learner to make something look professional.
              </p>
              <br />
              <p>
                How it went was that I decided on making 3 frames, the <strong>main menu</strong>, the <strong>character creation screen</strong>, and a <strong>class panel overlay — also on the character creation page</strong>. The main menu being quite easy to make and basically a warm-up for the other pages, only displaying text and the game title card. However, I found out here that I had missed one step during the earlier wireframing stage; defining <strong>interaction states</strong> on text and buttons <i>(hover, active)</i>. I decided quickly on a gold gradient background combined with a light contrasting color indicating the current selection.
              </p>
              <br />
              <p>The 2 <i>character creation</i> wireframes were identical other than that one of them displayed what if the user had opened the class selection panel that showed a list of classes to choose from, while also moving around a few items to make them visible if they became occluded by the panel. <p>The setup of the character creation page was to have the main priority items on the top left and the stats mirrored on the right of them and then at the bottom filling it out with a slight asymmetrical  layout with a <i>'Finalize Creation'</i> button and <i>vocational items</i> (my personal touch).</p></p>
              <br />
              <div className="image-grid">
                <Zoom>
                  <img
                    src={EldenRingHighFidelityWireframe01}
                    alt="High-fidelity wireframe of the main menu"
                  />
                </Zoom>
                <Zoom>
                  <img
                    src={EldenRingHighFidelityWireframe02}
                    alt="High-fidelity wireframe of character creation screen"
                  />
                </Zoom>
                <Zoom>
                  <img
                    src={EldenRingHighFidelityWireframe03}
                    alt="High-fidelity wireframe of the class selection panel on the character creation screen"
                  />
                </Zoom>
              </div>
              <br />
              {/* <h2>Conclusion</h2>
              <p>text text text</p> */}
            </div>
          </motion.div>

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
        {/* <div className="quick-links">
          <div className="quick-link-container prev">
            <Link to={projectQuickLinks[4].link}></Link>
            <span className="quick-link-text">Prev Project</span>
            <span className="quick-link-title">
              {projectQuickLinks[4].name}
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
        </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default Eldenring
