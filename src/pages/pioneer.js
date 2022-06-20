import React, { useEffect } from 'react'
import Navigation from '../components/Navigation/navigation'
import Footer from '../sections/footer'
import { Link } from 'react-router-dom'
import '../App.css'

import PioneerSketchImage01 from "../resources/images/pioneer_sketches_00.png";
import PioneerSketchImage02 from "../resources/images/pioneer_sketches_01.png";
import PioneerLowFidImage from "../resources/images/pioneer_low-fidelity.jpg";

import PioneerHighFidImage1 from "../resources/images/pioneer_mainmenu_preferences.jpg";
import PioneerHighFidImage2 from "../resources/images/pioneer_map_loadout.jpg";
import PioneerHighFidImage3 from "../resources/images/pioneer_gear_arsenal.jpg";
import PioneerHighFidImage4 from "../resources/images/pioneer_social_profile.jpg";

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
                <StatusItem title={'Team Size'} content={['1 (Personal)']} />
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
              </a> upcoming game, codenamed <strong>'PIONEER'</strong>. Additionally, a major inspiration of the main menu UI was the recent release of <a
                href="https://www.dice.se/"
                target="_blank"
                rel="noopener noreferrer"
              >DICE</a> 's new installation of the Battlefield-series, <strong>'Battlefield 2142'</strong>.</p>
              <br />
              {/* <h2>Process</h2> */}
              <div className="image-duo">
                <div>
                  <h3>Sketch pass 1</h3>
                  <p>I began by sketching various designs to find something that I feel could be considered modern and somewhat sci-fi.</p>
                  <img src={PioneerSketchImage01} alt="Basic digital sketches on various menu designs and notes" />
                </div>
                <div>
                  <h3>Sketch pass 2</h3>
                  <p>After asking and receiving some feedback on what people felt looked the best, I decided on the design similar to <i>Battlefield 2142</i> because of its straight-forward approach. I also went on to design concepts of other menu screens as well.</p>
                  <img src={PioneerSketchImage02} alt="Second iteration of digital sketches improved from the previous ones" />
                </div>
              </div>
              <br />
              <br />
              <div className='image-solo'>
                <h3>Low-fidelity wireframes</h3>
                <p>Continuing on from the sketches I jumped straight into coverting them to <strong>low-fidelity wireframes</strong>, now taking the layout, padding, margins, and white spaces into a lot more consideration. Stylistic changes were still made at this stage, though the general blocking of elements would still remain.</p>
                <div className="image-grid">
                  <img src={PioneerLowFidImage} alt="Low-fidelity wireframes of the previous sketches" />
                </div>
              </div>
              <br />
              <br />
              <h3>High-fidelity wireframes</h3>
              <p>Now getting closer to the very end, the focus would be on aesthetics, ornaments, colors, and filling the UI with more relevant art to give it all a bit more <i>'Oomph!'</i>. However, I realised that some of my designs such as the staging screen (Venture) and Loadout screen felt too simplistic and didn't have a modern feel to it. </p>
              <br />
              <p>As a last resort, a re-design of these layouts were made, now presenting the chosen setup of your character on a initial page while also not filling up and cluttering the entire screen - allowing the design to breath a bit more! The new layout iteration now resembling the 'Windows'-formula of seperating content into blocks.</p>
              <br />
              <p>One additional thing that changed was the intended platform design, as initially the design were made to be for console with large elements to be easily distinguishable from distance. This changed a bit due to my own realisation that to implement this design later into Unity would be a larger task than I previously anticipated as I didn't have time until the deadline to learn gamepad implementation. The end result ended up being to change the visual input prompts from gamepad buttons into keyboard keys and mouse buttons.</p>
              <div className="image-grid" style={{ "marginTop": "1rem" }}>
                <img src={PioneerHighFidImage1} alt="asd" />
                <img src={PioneerHighFidImage2} alt="asd" />
                <img src={PioneerHighFidImage3} alt="asd" />
                <img src={PioneerHighFidImage4} alt="asd" />
              </div>
              <br />
              <br />
              <div className='image-solo'>
                <h3>Unity implementation</h3>
                <p>description coming soon..</p>
                <div className="image-grid">
                  <img src={PioneerLowFidImage} alt="Low-fidelity wireframes of the previous sketches" />
                </div>
              </div>
              <br />
              <br />
              <h3>Ending statements</h3>
              <p>Description coming soon..</p>
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
