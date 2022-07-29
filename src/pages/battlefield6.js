import React, { useEffect } from 'react'
import Navigation from '../components/Navigation/navigation'
import Footer from '../sections/footer'
import { Link } from 'react-router-dom'
import '../App.css'

import BattlefieldReferenceImage from '../resources/images/bf6_reference.jpg'
import BattlefieldPillarImage01 from '../resources/images/Minimalist.png'
import BattlefieldPillarImage02 from '../resources/images/Inspired.png'
import BattlefieldPillarImage03 from '../resources/images/Functional.png'
import BattlefieldLowFidelityWireframeImage from '../resources/images/bf6_low-fidelity_wireframes.jpg'
import BattlefieldHighFidelityWireframeImage from '../resources/images/portfolio_bf6_item.png'
import BattlefieldExtraImage from '../resources/images/bf6_gameplay-mockup.jpg'

import RaidIcon from '../resources/images/bf6_raid-icon.jpg'
import PracticeIcon from '../resources/images/bf6_practice-icon.jpg'
import SocialIcon from '../resources/images/bf6_social-icon.jpg'
import ButtonPrompts from '../resources/images/bf6_button-prompts.jpg'

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

const Battlefield6 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page">
      <Navigation />
      <div className="page-container battlefield6">
        <div className="page-banner">
          <div className="banner-overlay"></div>
          <h1>Battlefield "6" UI concept</h1>
        </div>
        <div className="page-content" id="content">
          <section className="page-intro">
            <div className="page-intro-wrapper">
              <div className="status-panel">
                <StatusItem
                  title={'Team Size'}
                  content={[{ title: '1 (solo)' }]}
                />
                <StatusItem
                  title={'Duration'}
                  content={[
                    { title: '[24 hours — across 2 weeks]' },
                    { title: 'May 2021' },
                  ]}
                />
                <StatusItem
                  title={'Tools'}
                  content={[
                    { title: '[Adobe]' },
                    { title: 'XD, Photoshop, Illustrator' },
                  ]}
                />
              </div>
              <div className="files">
                <div>
                  <a
                    href="https://www.artstation.com/artwork/L3QbNR"
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
                    This is a <strong>personal project</strong> where I wanted
                    to try my hand at replicating the style of recent{' '}
                    <i>Battlefield</i> games while also at the same time
                    attempting to make something structurally new. My goal was
                    to create a concept of how the upcoming <i>Battlefield</i>{' '}
                    game could look.
                  </p>
                  <br />
                  <p>
                    Prior to this, I had no education or skill in{' '}
                    <strong>UI design</strong> and this was heavily based on my
                    own <strong>bias and preference.</strong>
                  </p>
                </div>
                <div>
                  <h2>What I did</h2>
                  <p>
                    As I had no relevant understanding of how UI was designed at
                    the time I began with making various{' '}
                    <i>low-fidelity wireframes</i> of <b>Main menus</b> to find
                    what would structurally look good and that could be extended
                    upon later on.
                  </p>
                  <br />
                  <p>
                    In the end, I made 2 <b>main menu</b>{' '}
                    <i>high-fidelity wireframes</i> that I felt captured the
                    aesthetics of how recent <i>Battlefield</i> games' menus
                    looked.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="page-media">
            <div className="page-media-wrapper">
              <h2>Theme</h2>
              <p>
                Taking into consideration the recent <i>Battlefield</i> games'
                UI and layout while simultaneously anticipating that the
                upcoming game in the series would be set in a modern
                time-period, I referenced and broke down those previous games'
                main menus to find something somewhat different layout-wise. My
                approach being to <strong>define key elements</strong> and{' '}
                <strong>adhere to a systematic structure.</strong>
              </p>
              <br />
              <br />
              <h3>Design Pillars</h3>
              <div className="three-row">
                <div>
                  <img
                    src={BattlefieldPillarImage01}
                    alt="Line-drawing of a chair to represent something being minimalist"
                  />
                  <span>Minimalist</span>
                </div>
                <div>
                  <img
                    src={BattlefieldPillarImage02}
                    alt="Intersecting ellipses to represent something being inspired"
                  />
                  <span>Inspired</span>
                </div>
                <div>
                  <img
                    src={BattlefieldPillarImage03}
                    alt="Gears to represent something functional"
                  />
                  <span>Functional</span>
                </div>
              </div>
              <br />
              <br />
              <div className="work-pairs">
                <img
                  className="content-image"
                  src={BattlefieldReferenceImage}
                  alt="Reference of main menus from Battlefield 1 and Battlefield 5"
                />
                <div>
                  <h3>References</h3>
                  <p>
                    <strong>Primary references</strong> and{' '}
                    <strong>inspiration</strong> came from the two most recent
                    games (at the time); <i>Battlefield 1</i> and{' '}
                    <i>Battlefield 5</i>, the reason being that UX principles
                    and UI layouts/aesthetics follows seemingly migratory
                    patterns that changes the design standards over time. My
                    premise were to consider those changes and hopefully improve
                    upon them.
                  </p>
                </div>
              </div>
              <div className="work-pairs">
                <img
                  className="content-image"
                  src={BattlefieldLowFidelityWireframeImage}
                  alt="Low-fidelity wireframes of different layouts of main menus"
                />
                <div>
                  <h3>Low-fidelity wireframes</h3>
                  <p>
                    When designing the initial sketches/wireframes I wanted to
                    translate some particular UI elements of the previous games
                    into my design &#8212; specifically the{' '}
                    <strong>minimalist</strong> and sharp container elements to
                    sustain the <i>familiar design</i> between the games.
                  </p>
                  <br />
                  <ul>
                    <li>
                      <strong>The first wireframe</strong> was basically a
                      carbon copy of <i>Battlefield 5's</i> main menu. I was
                      primarily getting familiarized with the{' '}
                      <strong>Adobe XD</strong> at this point as I hadn't used
                      it before.
                    </li>
                    <li>
                      The <strong>second wireframe</strong> was decent but I
                      felt I steered off too much from the identity of the{' '}
                      <i>Battlefield</i> design.
                    </li>
                    <li>
                      <strong>The third pass</strong> is where I felt I was
                      getting close, however, the navigation didn't feel modern
                      enough and the general layout didn't have an intention.
                    </li>
                    <li>
                      <strong>Fourth and last iteration</strong>. Here I removed
                      the container element of the navigation bar to make the
                      selected option stand out more and modified the layout to
                      present a sort of hierarchical design. The largest element
                      being the Hero/CTA and the other stacked elements being
                      staggered to virtually present an arrow pointing towards
                      the CTA.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="work-pairs">
                <img
                  className="content-image"
                  src={BattlefieldHighFidelityWireframeImage}
                  alt="High-fidelity wireframes of Splash, Main-menu, and Play-menu screens"
                />
                <div>
                  <h3>High-fidelity wireframes</h3>
                  <p>
                    Going into the design of the high-fidelity was the thing I
                    was looking forward to the most since this would be where
                    the actual <strong>identity</strong> of the project would be
                    incorporated. The majority of the rendered assets and images
                    used came from previous <i>Battlefield</i> games'
                    promotional material, and some content was from different
                    artists on <i>ArtStation</i> or <i>Pinterest</i>.
                  </p>
                  <br />
                  <p>The assets I made myself were the:</p>
                  <ul>
                    <li>
                      <strong>Raid</strong> icon{' '}
                      <img src={RaidIcon} alt="Icon for Raid game mode" />
                    </li>
                    <li>
                      <strong>Practice range</strong> icon{' '}
                      <img
                        src={PracticeIcon}
                        alt="Icon for Practice-range game mode"
                      />
                    </li>
                    <li>
                      <strong>Social/Party</strong> icon{' '}
                      <img src={SocialIcon} alt="Icon for Social/Party panel" />
                    </li>
                    <li>
                      <strong>Button prompts</strong>{' '}
                      <img
                        src={ButtonPrompts}
                        alt="Icons for Xbox-gamepad button prompts"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="extras">
                <h2>Extras</h2>
                <p>
                  At the end of the project, I felt that I wanted something
                  additional but different to break up the focus on menus, so I
                  tried my hand at <strong>photobashing</strong> various images
                  into one mockup, to present how UI would look in a{' '}
                  <strong>gameplay</strong> situation instead.
                </p>
                <p>
                  I ended up <u>not</u> finishing this, but the general idea and
                  approach were fun and something I probably want to improve on
                  in the future.
                </p>
                <br />
                <ol>
                  <li>
                    <strong>Base image</strong> &#8212; in this case, a
                    real-life image of soldiers in a field.
                  </li>
                  <li>
                    <strong>Image of a blue, better looking, sky</strong> to
                    replace the boring gray sky in the original base image.
                  </li>
                  <li>
                    <strong>
                      The last of the primary images that make it all come
                      together
                    </strong>{' '}
                    is the first-person view of a character holding a gun,
                    borrowed from <i>Escape From Tarkov</i>. Not only does this
                    bring the illusion to life, but it presents from a
                    designer's point of view how important it is to think about
                    the horizontal positioning of the asset and how much it
                    occludes from the player.
                  </li>
                  <br />
                  <p>
                    The very last thing I did was some{' '}
                    <strong>color grading</strong> by bumping up the{' '}
                    <strong>saturation</strong> to make it a bit{' '}
                    <i>less like real life</i>, partly blending them with the
                    digital ones. Unfortunately, no UI or HUD graphics were made
                    for this gameplay mockup as I felt I hadn't planned it out
                    enough and I had spent more time than I wanted on this
                    project already.
                  </p>
                </ol>
                <div className="image-solo">
                  <div className="image-grid">
                    <img
                      src={BattlefieldExtraImage}
                      alt="Prototype mockup/photobash of gameplay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
        </div>
        <div className="quick-links">
          <div className="quick-link-container prev">
            <Link to={projectQuickLinks[2].link}></Link>
            <span className="quick-link-text">Prev Project</span>
            <span className="quick-link-title">
              {projectQuickLinks[2].name}
            </span>
            <span className="quick-link-image"></span>
          </div>
          <div className="quick-link-container">
            <Link to={projectQuickLinks[4].link}></Link>
            <span className="quick-link-text">Next Project</span>
            <span className="quick-link-title">
              {projectQuickLinks[4].name}
            </span>
            <span className="quick-link-image"></span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Battlefield6
