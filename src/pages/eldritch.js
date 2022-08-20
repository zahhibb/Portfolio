import React, { useEffect } from 'react'
import Navigation from '../components/Navigation/navigation'
import Footer from '../sections/footer'
import { Link } from 'react-router-dom'
import '../App.css'

// import SketchImage01 from '../resources/images/pioneer_sketches_00.png'

import { projectQuickLinks } from './index'

function StatusItem({ title, content }) {
  let contentList = content.map((item, key) => (
    <a key={key} href={item.url} target="_blank" rel="noopener noreferrer">
      <h3>{item.title}</h3>
    </a>
  ))
  return (
    <div className="status-item">
      <h3>{title}</h3>
      {contentList}
    </div>
  )
}

function StatusItemWithoutLinks({ title, contentHead, content }) {
  let contentList = content.map((item, key) => <h3 key={key}>{item.title}</h3>)
  return (
    <div className="status-item">
      <h3>{title}</h3>
      <h3>{contentHead}</h3>
      {contentList}
    </div>
  )
}

const Eldritch = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page">
      <Navigation />
      <div className="page-container eldritch">
        <div className="page-banner">
          <div className="banner-overlay"></div>
          <h1>Eldritch</h1>
        </div>
        <div className="page-content" id="content">
          <section className="page-intro">
            <div className="page-intro-wrapper">
              <div className="status-panel">
                <StatusItem
                  title={'Team Size'}
                  contentHead={'[3]'}
                  content={[
                    {
                      title: 'Joakim Hedman',
                      url: 'https://www.linkedin.com/in/joakim-hedman/',
                    },
                    {
                      title: 'Samael Kärvemo',
                      url: 'https://www.linkedin.com/in/samael-karvemo/',
                    },
                    {
                      title: 'Simon Lindström',
                      url:
                        'https://www.linkedin.com/in/simon-lindstr%C3%B6m-b93b54112/',
                    }
                  ]}
                />
                <StatusItemWithoutLinks
                  title={'Role(s)'}
                  content={[
                    { title: 'UX/UI Designer' },
                    { title: 'Programmer' },
                    { title: 'Game Designer' },
                  ]}
                />
                <StatusItemWithoutLinks
                  title={'Duration'}
                  content={[
                    { title: '[10 weeks]' },
                    { title: '8 Aug 2022 — XX Nov 2022' },
                  ]}
                />
                <StatusItemWithoutLinks
                  title={'Software & Engines'}
                  content={[
                    { title: 'Unreal Engine 5' },
                    { title: 'Figma' },
                    { title: 'Photoshop' },
                    { title: 'Midjourney AI' },
                  ]}
                />
              </div>
              <div className="files">
                <div>
                  <a
                    href="https://itch.io/zahhibb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play the game
                  </a>
                </div>
                <div>
                  <a href="https://statuesque-shampoo-45e.notion.site/Eldritch-Dungeon-07b34fe2f4074a19849bc413599eb353" target="_blank" rel="noopener noreferrer">
                    Explore the documentation
                  </a>
                </div>
              </div>
              <div className="definitions">
                <div>
                  <h2>Project overview</h2>
                  <p>
                    lorem ipsum
                  </p>
                </div>
                <div>
                  <h2>My contributions</h2>
                  <p>
                    lorem ipsum
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="page-media">
            <div className="page-media-wrapper">
              <h2>[Under construction]</h2>
              <h2>Process</h2>
              <p>
                lorem ipsum
              </p>
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

export default Eldritch
