import React, { useEffect } from 'react'
import Navigation from '../components/Navigation/navigation'
import Footer from '../sections/footer'
import { Link } from 'react-router-dom'
import '../App.css'

import BattlefieldReferenceImage from '../resources/images/bf6_reference.jpg';
import BattlefieldPillarImage01 from '../resources/images/Minimalist.png';
import BattlefieldPillarImage02 from '../resources/images/Inspired.png';
import BattlefieldPillarImage03 from '../resources/images/Functional.png';
import BattlefieldWireframeImage from '../resources/images/bf6_Low-Fidelity_Wireframes.jpg';

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
                <StatusItem title={'Team Size'} content={['1 (Personal)']} />
                <StatusItem
                  title={'Duration'}
                  content={['24 hours (across 2 weeks)']}
                />
                <StatusItem
                  title={'Tools'}
                  content={['Adobe [XD, Photoshop, Illustrator]']}
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
                    This is a personal project where I wanted to try my hand at
                    replicating the style of recent Battlefield games while also
                    at the same time attempting to make something structurally
                    new. My goal was to create a concept of how the upcoming
                    Battlefield game could look.
                  </p>
                  <br />
                  <p>
                    Prior to this I had no education or skill in UI design and
                    this was heavily based on my own bias and preference.
                  </p>
                </div>
                <div>
                  <h2>What I did</h2>
                  <p>
                    As I had no relevant understanding of how UI were designed at the time
                    I began with making various{' '}
                    <i>low-fidelity wireframes</i> of <b>Main menus</b> to find
                    what would structurally look good and that could be extended
                    upon later on.
                  </p>
                  <br />
                  <p>
                    In the end I made 2 <b>main menu</b>{' '}
                    <i>high-fidelity wireframes</i> that I felt captured the
                    aesthetics of how recent Battlefield games' menus looked.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="page-media">
            <div className="page-media-wrapper">
              <h2>Theme & references</h2>
              <p>Taking into consideration the recent <i>Battlefield</i> games' UI and layout while simultaneously anticipating that the upcoming <i>Battlefield</i> game would be set in a modern time-period, I referenced and broke down those previous games' main menus to find something somewhat different layout-wise. My approach being to <strong>define key elements and a systematic structure.</strong></p>
              <br />
              <h3>Design Pillars</h3>
              <div className='three-row'>
                <div>
                  <img src={BattlefieldPillarImage01} />
                  <span>Minimalist</span>
                </div>
                <div>
                  <img src={BattlefieldPillarImage02} />
                  <span>Inspired</span>
                </div>
                <div>
                  <img src={BattlefieldPillarImage03} />
                  <span>Functional</span>
                </div>
              </div>
              <br />
              <div className="work-pairs">
                <img
                  className="content-image"
                  src={BattlefieldReferenceImage}
                  alt="Reference of main menus from Battlefield 1 and Battlefield 5"
                />
                <p>Primary references and inspiration came from the two most recent games (at the time); <i>Battlefield 1</i> and <i>Battlefield 5</i>, the reason being that UX principles and UI layouts/aesthetics follows seemingly migratory patterns that changes the design standards of the time. My premise were to consider those changes and hopefully improve upon them.</p>
              </div>
              <div className="work-pairs">
                <img
                  className="content-image"
                  src={BattlefieldWireframeImage}
                  alt="Low-fidelity wireframes of different layouts of main menus"
                />
                <p>asd</p>
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
