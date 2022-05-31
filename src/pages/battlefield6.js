import React, { useEffect } from 'react'
import Navigation from '../components/Navigation/navigation'
import Footer from '../sections/footer'
import { Link } from 'react-router-dom'
import '../App.css'

// import BattlefieldImage01 from '../resources/images/battlerite_01.jpeg'
// import BattlefieldImage02 from '../resources/images/battlerite_02.jpg'

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
                <StatusItem title={'Team Size'} content={['Personal']} />
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
                  <h2>Summary</h2>
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
                    As I had no relevant understanding of how UI are designed,
                    so I began with making various{' '}
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
          <p>Content coming soon..</p>
          <br />
          {/* <section className="page-media">
            <div className="page-media-wrapper">
              <div className="image-grid">
                <img src={BattlefieldImage01} alt="Battlefield 1" />
                <img src={BattlefieldImage02} alt="Battlefield 2" />
              </div>
            </div>
          </section> */}
          {/* <section className="page-media">
            <div className="page-media-wrapper">
              <div className="video-wrapper">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/KU6Ra-P746k"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </section> */}
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
