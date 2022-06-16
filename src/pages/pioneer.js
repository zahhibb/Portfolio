import React, { useEffect } from 'react'
import Navigation from '../components/Navigation/navigation'
import Footer from '../sections/footer'
import { Link } from 'react-router-dom'
import '../App.css'

import PioneerSketchImage01 from "../resources/images/pioneer_sketches_00.png";
import PioneerSketchImage02 from "../resources/images/pioneer_sketches_01.png";
import PioneerLowFidImage from "../resources/images/pioneer_low-fidelity.jpg";
import PioneerHighFidImage from "../resources/images/pioneer_sketches_01.png";

import { projectQuickLinks } from './index'

function StatusItem({ title, content }) {
  let contentList = content.map((item, key) => <h3 key={key}>{item}</h3>)
  return (
    <div className="status-item">
      <h3>{title}</h3>
      {contentList}
    </div>
  )
}

const Pioneer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page">
      <Navigation />
      <div className="page-container pioneer">
        <div className="page-banner">
          <div className="banner-overlay"></div>
          <h1>"Pioneer" FPS UI</h1>
        </div>
        <div className="page-content" id="content">
          <section className="page-intro">
            <div className="page-intro-wrapper">
              <div className="status-panel">
                <StatusItem title={'Team Size'} content={['Personal']} />
                <StatusItem title={'Duration'} content={['4 weeks']} />
                <StatusItem
                  title={'Engine & Tools'}
                  content={['Unity, Figma, Photoshop']}
                />
              </div>
              <div className="definitions">
                <div>
                  <h2>Summary</h2>
                  <p>
                    During my time studying at <b>FutureGames</b> we got an
                    assignment to design a <b>UI/HUD</b> for an existing game,
                    or make up an original concept. Our assignment from start to
                    finish was to go through every stage of the design process,
                    like <b>sketching</b>, <b>low-</b> &{' '}
                    <b>high-fidelity wireframing</b>, and implement it to be
                    functional inside of <b>Unity</b> or <b>Figma</b>.
                  </p>
                  <br />
                  <p>
                    I decided to use an announced but not yet revealed game (apart from some concept images) from{' '}
                    <a
                      href="https://www.embark-studios.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Embark Studios
                    </a>{' '}
                    as a concept, which is intended to be a{' '}
                    <i>futuristic post-apocalyptic first-person shooter</i>.
                  </p>
                </div>
                <div>
                  <h2>What I did</h2>
                  <p>During these 4 weeks I decided to try imagining what this new upcoming game's UI would look like, and as there was no information surrounding the game except for some concepts, the theme, and genre, I had to come up with design decisions myself on what the game would have.</p>
                  <br />
                  <p>
                    The premise I decided to go for was a <strong>4-player Co-op Survival</strong> game, and so the UI and the menus would have to manage that data. What I ended up working on was the primary menus, from assembling a team, to deciding gear and starting location.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="page-media">
            <div className="page-media-wrapper">
              <h2>Concept & references</h2>
              <p>The premise and biggest inspiration for this project was <a
                href="https://www.embark-studios.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Embark Studios
              </a> upcoming game, codenamed 'PIONEER'. Additionally, a major inspiration of the main menu UI was the recent release of <a
                href="https://www.dice.se/"
                target="_blank"
                rel="noopener noreferrer"
              >DICE</a> 's new installation of the Battlefield-series, <strong>'Battlefield 2142'</strong>.</p>
              <br />
              <div className="image-duo">
                <div>
                  <h3>Sketch pass 1</h3>
                  <p>I began by sketching various designs to find something that I feel could be considered modern and somewhat sci-fi.</p>
                  <br/>
                  <img src={PioneerSketchImage01} alt="Basic digital sketches on various menu designs and notes" />
                </div>
                <div>
                  <h3>Sketch pass 2</h3>
                  <p>After asking and receiving some feedback on what people felt looked the best, I decided on the design similar to <i>Battlefield 2142</i> because of its straight-forward approach.</p>
                  <img src={PioneerSketchImage02} alt="Second iteration of digital sketches improved from the previous ones" />
                </div>
              </div>
              <br />
              <h2>Low-fidelity wireframes</h2>
              <p>asd asd aasd</p>
              <div className="image-grid">
                <img className='grid-solo' src={PioneerLowFidImage} alt="asd" />
              </div>
              <br/>
              <h2>High-fidelity wireframes</h2>
              <p>asd asd aasd</p>
              <div className="image-grid">
                <img className='grid-solo' src={PioneerHighFidImage} alt="asd" />
              </div>
            </div>
          </section>
        </div>

        <div className="quick-links">
          <div className="quick-link-container prev">
            <Link to={projectQuickLinks[1].link}></Link>
            <span className="quick-link-text">Prev Project</span>
            <span className="quick-link-title">
              {projectQuickLinks[1].name}
            </span>
            <span className="quick-link-image"></span>
          </div>
          <div className="quick-link-container">
            <Link to={projectQuickLinks[3].link}></Link>
            <span className="quick-link-text">Next Project</span>
            <span className="quick-link-title">
              {projectQuickLinks[3].name}
            </span>
            <span className="quick-link-image"></span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Pioneer
