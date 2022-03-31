import React, { useEffect } from 'react'
import Navigation from '../components/Navigation/navigation'
import Footer from '../sections/footer'
import { Link } from 'react-router-dom'
import '../App.css'

import BattleriteImage01 from '../resources/images/battlerite_01.jpeg'
import BattleriteImage02 from '../resources/images/battlerite_02.jpg'
// import BattleriteImage03 from "../resources/images/battlerite_03.jpg";
// import BattleriteImage04 from "../resources/images/battlerite_05.jpg";

import BattleriteGeneralImage01 from '../resources/images/payload_sketch.jpg'
import BattleriteGeneralImage02 from '../resources/images/healthorb.png'
import BattleriteGeneralImage03 from '../resources/images/energyorb.png'
import BattleriteGeneralImage04 from '../resources/images/RuneOfBone.png'
import BattleriteGeneralImage05 from '../resources/images/boneorbSpawnLocation.png'
// import BattleriteGeneralImage06 from "../resources/images/";
// import BattleriteGeneralImage07 from "../resources/images/";

// import BattleriteTutorialimage from "../resources/images/";

import BattleriteEggBrawlImage01 from '../resources/images/easter_arena.png'
import BattleriteEggBrawlImage02 from '../resources/images/Battlerite_Dodgeball.png'
import BattleriteEggBrawlImage03 from '../resources/images/bakko_egg_brawl_01.jpg'
import BattleriteEggBrawlImage04 from '../resources/images/bakkoeggbrawl.png'

// import BattleriteRocketBalloonImage01 from "../resources/images/";
// import BattleriteRocketBalloonImage02 from "../resources/images/";
// import BattleriteRocketBalloonImage03 from "../resources/images/";

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

const Battlerite = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page">
      <Navigation />
      <div className="page-container battlerite">
        <div className="page-banner">
          <div className="banner-overlay"></div>
          <h1>Battlerite</h1>
        </div>
        <div className="page-content" id="content">
          <section className="page-intro">
            <div className="page-intro-wrapper">
              <div className="status-panel">
                <StatusItem title={'Team Size'} content={['4 interns']} />
                <StatusItem
                  title={'Role(s)'}
                  content={['Gameplay Programmer', 'Technical Designer']}
                />
                <StatusItem title={'Duration'} content={['8 months']} />
                <StatusItem
                  title={'Engine & Tools'}
                  content={['Unity & proprietary engine']}
                />
              </div>
              <div className="files">
                <div>
                  <a
                    href="https://store.steampowered.com/app/504370/Battlerite/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Steam link"
                  >
                    Play the game on Steam
                  </a>
                </div>
                <div>
                  <a
                    href="https://arena.battlerite.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Battlerite website link"
                  >
                    Visit the website
                  </a>
                </div>
              </div>
              <div className="definitions">
                <div>
                  <h2>Summary</h2>
                  <p>
                    <b>Battlerite (Arena)</b> is an{' '}
                    <i>Fantasy Top-down Team Arena Brawler</i> with focus on
                    fast-paced action without any random elements. Two teams of
                    2 or 3 players fight against each other using their
                    specialized champions with varied abilities.
                  </p>
                  <br />
                  <p>
                    Three game modes was developed for the game in 8 months
                    during my internship (in addition with some contract work
                    over the summer).
                  </p>
                </div>
                <div>
                  <h2>My contributions</h2>
                  <p>
                    I joined the studio with my specialization being in
                    programming. The majority of my time was spent{' '}
                    <b>prototyping and developing new game modes</b>, but I also
                    had the pleasure to work on multiple things like{' '}
                    <b>Encounter design</b> to update the tutorial and campaign
                    mode, as well some minor <b>Level-</b>, and{' '}
                    <b>Character design</b>.
                  </p>
                  <br />
                  <p>
                    Additionally I got to help out on{' '}
                    <b>UI wireframing and mockups</b> for the then upcoming UI
                    overhaul (which you can read more about on Stunlock's at the
                    time UI/UX designer Katey Parr's{' '}
                    <a
                      href="http://kateyparr.com/project/battlerite-menu"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Katey Parr website article link"
                    >
                      breakdown
                    </a>
                    ).
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="page-media">
            <div className="page-media-wrapper">
              <div className="image-grid">
                <img
                  src={BattleriteImage01}
                  alt="Battlerite match pre-engagement"
                />
                <img
                  src={BattleriteImage02}
                  alt="Battlerite 1 versus 1 battle"
                />
                {/* <img src={BattleriteImage03} alt="Battlerite 2 versus 1 battle" />
                                <img src={BattleriteImage04} alt="Battlerite match winning screen" /> */}
              </div>
            </div>
          </section>
          <section className="page-section general">
            <div className="content-section-wrapper">
              <div className="content">
                <h2>Concept</h2>
                <p>
                  The premise of the internship was to work together with the
                  studio to ideate, prototype, and iterate on discovering
                  valuable data on what genre of game modes would work well with
                  their tools, using mostly previously made assets.
                </p>
                <br />
                <h2>Process</h2>
                <p>
                  The work began by disassembling already defined game modes
                  that other games tend to use, to see if it could fit well into
                  Battlerite's combat-filled and tumultuous gameplay.
                  Additionally we had to take into account to primarily use
                  assets and systems that the game had already defined such as
                  health/energy orbs, maps, destructible objects, etc.
                </p>
                <br />
                <div className="orb-references">
                  <div>
                    <img
                      className="orb-reference-image"
                      src={BattleriteGeneralImage02}
                      alt="Battlerite health orb"
                    />
                    <h4>Health orb</h4>
                    <span>Pick-up that restores health</span>
                  </div>
                  <div>
                    <img
                      className="orb-reference-image"
                      src={BattleriteGeneralImage04}
                      alt="Battlerite bone orb"
                    />
                    <h4>Bone orb</h4>
                    <span>
                      Destructible orb that grants large amount of energy
                    </span>
                  </div>
                  <div>
                    <img
                      className="orb-reference-image"
                      src={BattleriteGeneralImage03}
                      alt="Battlerite energy orb"
                    />
                    <h4>Energy orb</h4>
                    <span>Pick-up that grants energy</span>
                  </div>
                </div>
                {/* <div className="entity-references">
                                    <img className="entity-reference-image" />
                                    <h4>Turok</h4>
                                    <span>Small unit with a basic ranged attack</span>
                                </div> */}
                <br />
                <div className="image-container right">
                  <img
                    className="content-image"
                    src={BattleriteGeneralImage01}
                    alt="Battlerite payload sketch"
                  />
                  <span>Payload path sketch</span>
                </div>
                <p>
                  My thought process on breaking down Battlerite's assets,
                  systems and mechanics was first to set up a definition/idea
                  list as to make it more readable and digestible, but also to
                  define both the pros and cons of each respective design:
                </p>
                <ul>
                  <li>
                    <p>
                      <b>Maps/Arenas</b>
                    </p>
                    <ul>
                      <li>
                        <u>Pros:</u> They are mirrored, so possibility for CTF
                        (Capture the flag) or Payload (Tug-of-war) modes.
                      </li>
                      <li>
                        <u>Cons:</u> Payload could work well, but with CTF there
                        are some issues. Due to the reason that some champions
                        have far better mobility than others, then we have to
                        consider either having a set of specific champions to
                        choose from for this mode, or suppressing/disabling some
                        abilities when carrying the “flag”.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      <b>Health/energy orbs</b>
                    </p>
                    <ul>
                      <li>
                        <u>Pros:</u> Almost endless possibilities for different
                        kinds of power-ups (damage boosts, ability improvement,
                        “XP”-orbs for level-up system, etc).
                      </li>
                      <li>
                        <u>Cons:</u> Most likely the only thing that could be
                        inherited would be the pick-up mechanic, but as for the
                        systems of applying buffs/experience and such to the
                        Champions would have to be entirely custom.
                      </li>
                    </ul>
                  </li>
                  <div className="image-container right">
                    <img
                      className="content-image small"
                      src={BattleriteGeneralImage05}
                      alt="Battlerite bone orb spawning circle"
                    />
                    <span>Bone orb spawning circle</span>
                  </div>
                  <li>
                    <p>
                      <b>Bone/middle orb</b>
                    </p>
                    <ul>
                      <li>
                        <u>Pros:</u> Would be appropriate to use for modes to
                        push, kick, protect, or destroy it. Could also be
                        expanded by using the mechanics and visuals of the
                        spawning location of the Bone orb to use it as a
                        King-of-the-hill game mode.
                      </li>
                      <li>
                        <u>Cons:</u> Battlerite’s physics systems weren’t made
                        to handle non-player objects moving around the levels,
                        so there’s a few things that could go wrong, like
                        floating-point inaccuracies and physical objects not
                        being in sync across all the clients.
                      </li>
                    </ul>
                  </li>
                  <br />
                  <p>
                    Taking into account what I learned from my breakdown, I
                    decided to begin working on the Payload system. I felt it
                    could be extended further into other modes, it was a good
                    starting point for learning the studio's tools and workflow,
                    and that I needed to work fast and iteratively on this to
                    find what is actually fun to do outside of Battlerite's
                    tight and calculated combat.
                  </p>
                  <br />
                  <p>
                    Later on, parts of my payload system would end up being the
                    base for one of the released game modes;{' '}
                    <i>Rocket Balloon</i>, which I'll go into a bit more detail
                    further down.
                  </p>
                </ul>
                <br />
                <h2>Main menu & Odeum UI concepting</h2>
                <p>asd</p>
                <br />
                <h2>Tutorial encounter design</h2>
                <p>asd</p>
              </div>
            </div>
          </section>

          <section className="page-section bakko-egg-brawl">
            <div className="content-section-wrapper">
              <div className="content">
                <div className="content-image header"></div>
                <img
                  className="content-image first"
                  src={BattleriteEggBrawlImage01}
                  alt="Battlerite Bakko's Egg Brawl characters and assets"
                />
                <h2>Bakko's Egg Brawl</h2>
                <p>
                  The first significant project I worked on at Stunlock Studios
                  was <b>Bakko's Egg Brawl</b>, or just simply <i>Dodgeball</i>{' '}
                  as we called it internally.
                </p>
                <br />
                <p>
                  <b>My personal work on this project consisted of:</b>
                </p>
                <ul>
                  <li>
                    Designing and implementing a drop/pick-up mechanic, and also
                    a small system to visually change a Champion's current
                    weapon slot into a picked up item.
                  </li>
                  <li>
                    Creating basic system for spawning randomized items of
                    different types at specific locations.
                  </li>
                  <li>Game balancing & spell effects modifications.</li>
                </ul>
                <br />
                <img
                  className="content-image second"
                  src={BattleriteEggBrawlImage02}
                  alt="Battlerite Bakko's Egg Brawl dodgeball prototype"
                />
                <br />
                <p>
                  Our mentor, a senior Technical Artist at the studio, took
                  notice of what we were doing and pitched the prototype that we
                  were working on to the rest of the studio, which got greenlit
                  for the upcoming easter event.
                </p>
                <br />
                <p>
                  [Image to the left] Screenshot of prototype gameplay, where
                  the playable character were different and the projectiles were
                  still just pink spheres.
                </p>
                <br />
                <p style={{ clear: 'left' }}>
                  Read more about it on the official{' '}
                  <a
                    href="https://blog.stunlock.com/dev-blog-010/"
                    target="_blank"
                    title="Battlerite blog website link"
                    rel="noopener noreferrer"
                  >
                    Battlerite DevBlog
                  </a>
                  .
                </p>
                <div className="image-grid">
                  <img
                    src={BattleriteEggBrawlImage03}
                    alt="Battlerite Bakko's Egg Brawl reflecting egg"
                  />
                  <img
                    src={BattleriteEggBrawlImage04}
                    alt="Battlerite Bakko's Egg Brawl 4 player standoff"
                  />
                </div>
                {/* <div className="video-wrapper">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lPjtXo3sNlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div> */}
              </div>
            </div>
          </section>
          <section className="page-section rocket-balloon">
            <div className="content-section-wrapper">
              <div className="image"></div>
              <div className="content">
                <div className="content-image header"></div>
                <img
                  className="content-image first"
                  src={BattleriteEggBrawlImage01}
                  alt="Battlerite Rocket Balloon"
                />
                <h2>Rocket Balloon</h2>
                <p>asd</p>
              </div>
            </div>
          </section>
          <section className="page-section battlegrounds">
            <div className="content-section-wrapper">
              <div className="content">
                <h2>Battlegrounds</h2>
                <p>asd</p>
              </div>
              <div className="image"></div>
            </div>
          </section>
          <section className="page-media">
            <div className="page-media-wrapper">
              <div className="video-wrapper">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/KU6Ra-P746k"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        </div>

        <div className="quick-links">
          <div className="quick-link-container">
            <Link to={projectQuickLinks[1].link}></Link>
            <span className="quick-link-text">Next Project</span>
            <span className="quick-link-title">
              {projectQuickLinks[1].name}
            </span>
            <span className="quick-link-image"></span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Battlerite
