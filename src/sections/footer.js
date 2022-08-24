import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

import GameImg1 from '../resources/images/about_eldenring.png'
import GameImg2 from '../resources/images/about_dyinglight2.jpg'
import GameImg3 from '../resources/images/about_vrising.jpg'

function InterestGameItem({ title, image }) {
  return <img src={image} alt="Anno 1800 cover art" title={title} />
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-interests">
            <p>The games I am currently playing:</p>
            <div>
              <InterestGameItem
                title={'Elden Ring'}
                image={GameImg1}
                imageAlt={'Elden Ring cover art'}
              />
              <InterestGameItem
                title={'Dying Light 2'}
                image={GameImg2}
                imageAlt={'Dying Light 2 cover art'}
              />
              <InterestGameItem
                title={'V Rising'}
                image={GameImg3}
                imageAlt={'V Rising cover art'}
              />
            </div>
            {/* <Link to={'/gamelist'}>Check out my personal game lists</Link> */}
          </div>
          <div className="footer-details">
            <p>Reach out to me on any of these channels:</p>
            <div>
              <a
                href="https://www.linkedin.com/in/joakim-hedman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              {/* <a
                href="https://twitter.com/Zahhibb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a> */}
              <a
                href="https://www.artstation.com/zahhibb"
                target="_blank"
                rel="noopener noreferrer"
              >
                ArtStation
              </a>
              <a
                href="https://zahhibb.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Itch.io
              </a>
              <a href="mailto:jocke_hedman@hotmail.com">Email</a>
            </div>
          </div>
          <div className="copyright">
            <span>&#169;</span>
            <span>{new Date().getFullYear()}</span>
            <span>Joakim Hedman</span>
            <span>|</span>
            <Link to={'/credits'}>Credits</Link>
            <span>|</span>
            <span>
              Site made by
              <Link to={{ pathname: '/about', hash: '#about' }}>me</Link>!
            </span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
