import React, { useEffect } from 'react'
import Navigation from '../components/Navigation/navigation'
import Footer from '../sections/footer'
import { Link } from 'react-router-dom'
import '../App.css'
import Zoom from 'react-medium-image-zoom'
import '../styles.css'
import { motion } from "framer-motion"

import BattleriteIcon from '../resources/images/battlerite-icon.png'

import Gameplay1 from '../resources/images/battlerite_01.jpeg'
import Gameplay2 from '../resources/images/battlerite_02.jpg'

import PayloadSketch from '../resources/images/battlerite_payload-sketch.jpg'
import Orbs from '../resources/images/battlerite_orbs.jpg'
import BoneOrbSpawnLocation from '../resources/images/battlerite_orb-spawn-location.png'

import EggBrawlHeader from '../resources/images/battlerite_bakko-egg-brawl_header.jpg'
import EggBrawlPrototype from '../resources/images/battlerite_bakko-egg-brawl_prototype.png'
import EggBrawl1 from '../resources/images/battlerite_bakko-egg-brawl_01.jpg'
import EggBrawl2 from '../resources/images/battlerite_bakko-egg-brawl_02.png'

import RocketBalloonBrawlHeader from '../resources/images/battlerite_rocket-balloon-brawl_header.png'
import RocketBalloonBrawl1 from "../resources/images/battlerite_rocket-balloon-brawl_01.png";
import RocketBalloonBrawl2 from "../resources/images/battlerite_rocket-balloon-brawl_02.png";

import BattlegroundsHeader from "../resources/images/battlerite_battlegrounds_header.png";
import Battlegrounds1 from "../resources/images/battlerite_battlegrounds-gameplay_01.jpg";
import Battlegrounds2 from "../resources/images/battlerite_battlegrounds-gameplay_02.jpg";
import Battlegrounds3 from "../resources/images/battlerite_battlegrounds-gameplay_03.png";
import Battlegrounds4 from "../resources/images/battlerite_battlegrounds-gameplay_04.png";

import { projectQuickLinks } from './index'

function StatusItem({ title, contentHead, content }) {
  let contentList = content.map((item, key) => (
    <a key={key} href={item.url} target="_blank" rel="noopener noreferrer">
      <h3>{item.title}</h3>
    </a>
  ))
  return (
    <div className="status-item">
      <h3>{title}</h3>
      <h3>{contentHead}</h3>
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
              <motion.div className="status-panel" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                <StatusItem
                  title={'Team Size'}
                  contentHead={'[4 interns]'}
                  content={[
                    {
                      title: 'Joakim Hedman',
                      url: 'https://www.linkedin.com/in/joakim-hedman/',
                    },
                    {
                      title: 'Erik Grönlund',
                      url:
                        'https://www.linkedin.com/in/erik-gr%C3%B6nlund-8b77a996/',
                    },
                    {
                      title: 'Andreas Lidell',
                      url:
                        'https://www.linkedin.com/in/andreas-lidell-439b5589/',
                    },
                    {
                      title: 'Gustaf Wall',
                      url: 'https://www.linkedin.com/in/gustaf-wall-416070b9/',
                    },
                  ]}
                />
                <StatusItemWithoutLinks
                  title={'Role(s)'}
                  content={[
                    { title: 'Gameplay Programmer' },
                    { title: 'Technical Designer' },
                  ]}
                />
                <StatusItemWithoutLinks
                  title={'Duration'}
                  content={[
                    { title: '[8 months]' },
                    { title: `Jan 2017 — Aug 2017` },
                  ]}
                />
                <StatusItemWithoutLinks
                  title={'Software & Engines'}
                  content={[{ title: 'Unity & in-house engine' }]}
                />
              </motion.div>
              <motion.div className="video-wrapper" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/KU6Ra-P746k"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
              <motion.div className="files" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
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
              </motion.div>
              <motion.div className="definitions" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
                <div>
                  <h2>Summary</h2>
                  <p>
                    <b>Battlerite (Arena)</b> is a{' '}
                    <i>Fantasy Top-down Team Arena Brawler</i> with a focus on
                    fast-paced action without any random elements. Two teams of
                    2 or 3 players fight against each other using their
                    specialized champions with varied abilities.
                  </p>
                  <br />
                  <p>
                    <b>Three game modes</b> were developed for the game in 8 months
                    during my internship (in addition to some contract work over
                    the summer), primarily by me and 3 other interns (we were 2
                    designers and 2 programmers in total, me being one of the
                    programmers).
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
                    Additionally, I got to help out on{' '}
                    <b>UI wireframing and mockups</b> for the then-upcoming UI
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
              </motion.div>
            </div>
          </section>

          <motion.div className="page-media" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
            <div className="page-media-wrapper">
              <div className="image-grid">
                <Zoom>
                  <img src={Gameplay1} alt="Battlerite match pre-engagement" />
                </Zoom>
                <Zoom>
                  <img src={Gameplay2} alt="Battlerite 1 versus 1 battle" />
                </Zoom>
              </div>
            </div>
          </motion.div>

          <motion.div className="page-section general" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
            <div className="content-section-wrapper">
              <div className="content">
                <div className='premise'>
                  <h2>Premise</h2>
                  <p>
                    The premise of the internship was to work together with the
                    studio to ideate, prototype, and iterate on discovering
                    valuable data on what genre of game modes would work well
                    with their tools, using mostly previously made assets.
                  </p>
                </div>
                <br />
                <div className='process'>
                  <h2>Process</h2>
                  <p>
                    The work began by disassembling already defined game modes
                    that other games tend to use, to see if it could fit well
                    into Battlerite's combat-filled and tumultuous gameplay.
                    Additionally we had to take into account to primarily use
                    assets and systems that the game had already defined such as
                    health/energy orbs, maps, destructible objects, etc.
                  </p>
                </div>
                <br />
                <p>
                  My thought process on breaking down Battlerite's assets,
                  systems and mechanics was first to set up a definition/idea
                  list as to make it more readable and digestible, but also to
                  define both the pros and cons of each respective design.
                </p>
                <br />
                <ul className='process-list'>
                  <li>
                    <div className="image-container">
                      <img
                        src={PayloadSketch}
                        alt="Battlerite payload sketch"
                      />
                      <span>Payload path sketch</span>
                    </div>
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
                    <div className="image-container">
                      <img
                        src={Orbs}
                        alt=""
                      />
                      <span>Bone Orb & pick-ups</span>
                    </div>
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
                  <li>
                    <div className="image-container">
                      <img
                        src={BoneOrbSpawnLocation}
                        alt="Battlerite bone orb spawning circle"
                      />
                      <span>Bone orb spawning circle</span>
                    </div>
                    <p>
                      <b>Bone orb & spawning circle</b>
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
                </ul>
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
                  Later on, parts of my <b>payload system</b> would end up being the
                  base for one of the released game modes;{' '}
                  <i>Rocket Balloon</i>, which I'll go into a bit more detail
                  further down.
                </p>
                <hr />
                <div className='ui-concepting'>
                  <h2>UI concepting</h2>
                  <p>
                    For a short duration of my time at Stunlock I helped with
                    ideation, sketching, and UI wireframing of a redesign of the
                    main menu and replay module; Odeum, for their upcoming “Mega
                    patch”, that would overhaul almost the entirety of their UI
                    and UX in the game.
                  </p>
                  <br />
                  <p>
                    The goal was to rebrand the Battlerite aesthetics from the
                    current busy and brown design into a modern take; going for a
                    more minimalistic approach with fewer bevels and ornaments,
                    and more towards sleek sharp edges and clear visibility.
                  </p>
                  <br />
                  <p><strong>What I personally worked on:</strong></p>
                  <ul>
                    <li>
                      Ideation and brainstorming on symbolism and interaction
                      design.
                    </li>
                    <li>
                      Sketching and wireframing ideas for new layouts, visual
                      design, etc.
                    </li>
                    <li>Navigation design using flowcharts.</li>
                  </ul>
                  <br />
                  <p>
                    In the end, it's hard to tell if parts of the work I did made
                    it into the final design, but I had a great time nonetheless
                    and learned a bit about <strong>UI design</strong> and{' '}
                    <strong>user affordances</strong>.
                  </p>
                </div>
                {/* <br />
                <h2>Tutorial & campaign encounter design</h2>
                <p>content coming soon..</p> */}
              </div>
            </div>
          </motion.div>

          <motion.div className="page-section bakko-egg-brawl" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
            <div className="content-section-wrapper">
              <div className="content">
                <div className="image-container header right">
                  <Zoom>
                    <img
                      className="content-image"
                      src={EggBrawlHeader}
                      alt="Battlerite Bakko's Egg Brawl game mode concept"
                    />
                  </Zoom>
                </div>
                <img src={BattleriteIcon} className="header-icon" alt="Icon of Battlerite" />
                <h2>Bakko's Egg Brawl</h2>
                <p className='battlerite-project-date'>January — March</p>
                <hr />
                <p>
                  The first significant project I worked on at Stunlock Studios
                  was <strong>Bakko's Egg Brawl</strong>, or just simply{' '}
                  <i>Dodgeball</i> as we called it internally. Us interns worked
                  on this from conception to release for approx. 2 months.
                </p>
                <br />
                <p>
                  How the game mode works is that all contestants play as the
                  same Champion; <i>Bakko</i>, in a 3v3 match where the only
                  abilities they have at their disposal is a shield that
                  reflects projectiles and a basic attack that knocks the
                  opponent back and makes them drop their held egg.
                </p>
                <p>
                  The main premise is to gather <strong>easter eggs</strong> of
                  varying powers scattered and spawning throughout the arena,
                  and throw them at the opposing team until their health is
                  depleted.
                </p>
                <br />
                <p>
                  <strong>
                    My work on this project consisted of:
                  </strong>
                </p>
                <ul>
                  <li>
                    Designing and implementing a drop/pick-up mechanic, and also
                    a small system to visually change a Champion's current
                    weapon slot into a picked-up item.
                  </li>
                  <li>
                    Creating a basic system for spawning randomized items of
                    different types at specific locations.
                  </li>
                  <li>Game balancing & spell effects modifications.</li>
                </ul>
                <br />
                <div className="prototype-gameplay image-container left">
                  <Zoom>
                    <img
                      className="content-image"
                      src={EggBrawlPrototype}
                      alt="Prototype gameplay of the Egg Brawl"
                    />
                  </Zoom>
                  <span>
                    Early prototype gameplay where the playable characters were
                    different and the projectiles were still just pink spheres.
                  </span>
                </div>
                <br />
                <p>
                  Our mentor, a senior Technical Artist at the studio, took
                  notice of what we were doing and pitched the prototype that we
                  were working on to the rest of the studio, which got greenlit
                  for the upcoming easter event.
                </p>
                <br />
                <p>
                  Read more about it on the official{' '}
                  <a
                    href="https://blog.stunlock.com/dev-blog-010/"
                    target="_blank"
                    title="Battlerite development blog #10 website link"
                    rel="noopener noreferrer"
                  >
                    Battlerite DevBlog #10
                  </a>
                  .
                </p>
                <br />
                <a
                  href="https://youtu.be/_KmLpPCsjyM?t=19"
                  target="_blank"
                  title="Unofficial youtube gameplay video of the Bakko Egg Brawl game mode"
                  rel="noopener noreferrer"
                >
                  Unofficial Bakko Egg Brawl gameplay video (Youtube)
                </a>
                <div className="image-grid">
                  <Zoom>
                    <img
                      src={EggBrawl1}
                      alt="Bakko reflecting an egg"
                    />
                  </Zoom>
                  <Zoom>
                    <img
                      src={EggBrawl2}
                      alt="Four player standoff"
                    />
                  </Zoom>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="page-section rocket-balloon-brawl" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
            <div className="content-section-wrapper">
              <div className="content">
                <div className="image-container header right">
                  <Zoom>
                    <img
                      className="content-image"
                      src={RocketBalloonBrawlHeader}
                      alt="Rocket Balloon Brawl game mode concept"
                    />
                  </Zoom>
                </div>
                <img src={BattleriteIcon} className="header-icon" alt="Icon of Battlerite" />
                <h2>Rocket Balloon Brawl</h2>
                <p className='battlerite-project-date'>April — June</p>
                <hr />
                <p>
                  The second large project I worked on and the one I had the
                  most hands-on involvement with both design- and
                  implementation wise.
                </p>
                <br />
                <p>
                  The game mode involves 6 players distributed into 2 equal
                  teams, as per usual in the <i>Battlerite</i> formula, however
                  the goal of this mode is to{' '}
                  <strong>take control of the Rocket Balloon</strong> that will
                  fire at the opponent's{' '}
                  <strong>Guardian (base structure)</strong>.
                </p>
                <br />
                <p>
                  In addition to this primary{' '}
                  <strong>king-of-the-hill/payload mechanic</strong> there are
                  substantial changes in how the core game loop of how a match
                  functions &#8212; one of the more stand-out features being
                  players now respawn after being killed.
                </p>
                <br />
                <p>
                  <strong>
                    My work on this project consisted of:
                  </strong>
                </p>
                <ul>
                  <li>
                    Designing and implementing the Rocket Balloon movement between checkpoints & firing logic (enable/disable shooting, stop current shot).
                  </li>
                  <li>
                    Working on and improving the capturing mechanic of the Rocket Balloon (capturing, contested, additive capturing speed).
                  </li>
                  <li>
                    Implementing mechanics & active states of Guardian (health system, respawning players, Last stand*).
                  </li>
                  <p>*<i>Last stand:</i> Buff to team if they lose their Guardian — designed for possibility of comeback.</p>
                </ul>
                <br />
                <p>
                  Read more about it on the official{' '}
                  <a
                    href="https://blog.stunlock.com/dev-blog-020/"
                    target="_blank"
                    title="Battlerite development blog #20 website link"
                    rel="noopener noreferrer"
                  >
                    Battlerite DevBlog #20
                  </a>
                  .
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=_4H0n014R5U&ab_channel=ChyillGaming"
                  target="_blank"
                  title="Unofficial youtube gameplay video of the Rocket Balloon Brawl game mode"
                  rel="noopener noreferrer"
                >
                  Unofficial Rocket Balloon Brawl gameplay video (Youtube)
                </a>
                <br />
                <br />
                <div className="image-grid">
                  <Zoom>
                    <img
                      src={RocketBalloonBrawl1}
                      alt="The Rocket Balloon and the capture point below it"
                    />
                  </Zoom>
                  <Zoom>
                    <img
                      src={RocketBalloonBrawl2}
                      alt="One team's Guardian (base structure)"
                    />
                  </Zoom>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="page-section battlegrounds" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
            <div className="content-section-wrapper">
              <div className="content">
                <div className="image-container header right">
                  <Zoom>
                    <img
                      className="content-image"
                      src={BattlegroundsHeader}
                      alt="Battlerite Battlegrounds game mode concept"
                    />
                  </Zoom>
                </div>
                <img src={BattleriteIcon} className="header-icon" alt="Icon of Battlerite" />
                <h2>Battlegrounds</h2>
                <p className='battlerite-project-date'>July — August</p>
                <hr />
                <p>
                  The third and final project I worked on during my time at the studio and the one project I weren't present for the entire duration of because of my contract over the summer ended.
                </p>
                <br />
                <p>This particular game mode is a both a amalgamation of various systems already implemented in Battlerite — like <i>Turok</i> (tutorial/practice boss), and the <i>Rocket Balloon</i>, while also containing new features such as a <b>leveling system</b>, <b>stealth-brush</b>, and more!</p>
                <br />
                <p>It's an <b>objective-oriented</b> game mode with <b>2 phases</b> continuously changing throughout the game, interspersed with random <b>events</b> that yield points needed to disable the shield of the opposing team's <b>Guardian</b>. The victory condition is to defeat the enemy Guardian.</p>
                <br />
                <p>
                  <strong>
                    On this particular project I worked on:
                  </strong>
                </p>
                <ul>
                  <li>
                    Designing & implementingBase Guardian attack states & -patterns (acquiring target, prioritizing targets based on distance/health/combat activity).
                  </li>
                  <li>
                    Designed, implemented, and balanced attacks states, -patterns, and stats (target priorities, combat behaviour based on various variables) for <b>Turok</b> (NPC boss enemy).
                  </li>
                  <li>
                    Balanced attack-/movement speed and implemented spawn logic for <b>Minions</b> (tiny enemy NPCs).
                  </li>
                </ul>
                <br />
                <p>
                  Read more about it on the official{' '}
                  <a
                    href="https://blog.stunlock.com/dev-blog-33/"
                    target="_blank"
                    title="Battlerite development blog #33 website link"
                    rel="noopener noreferrer"
                  >
                    Battlerite DevBlog #33
                  </a>
                  .
                </p>
                <br />
                <a
                  href="https://youtu.be/qXiT5sj3eX4"
                  target="_blank"
                  title="Official youtube preview video of the Battlegrounds game mode"
                  rel="noopener noreferrer"
                >
                  Official Battlegrounds preview video (Youtube)
                </a>
                <br />
                <br />
                <div className="image-grid">
                  <Zoom>
                    <img
                      src={Battlegrounds1}
                      alt="Non-player-character boss enemy Turok"
                    />
                  </Zoom>
                  <Zoom>
                    <img
                      src={Battlegrounds2}
                      alt="One team's Guardian, protected by a shield"
                    />
                  </Zoom>
                  <Zoom>
                    <img
                      src={Battlegrounds3}
                      alt="Battle between players trying to capture the Rocket Balloon"
                    />
                  </Zoom>
                  <Zoom>
                    <img
                      src={Battlegrounds4}
                      alt="One player hiding in stealth-brush from another player"
                    />
                  </Zoom>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="quick-links">
          <div className="quick-link-container prev">
            <Link to={projectQuickLinks[4].link}></Link>
            <span className="quick-link-text">Prev Project</span>
            <span className="quick-link-title">
              {projectQuickLinks[4].name}
            </span>
            <span className="quick-link-image"></span>
          </div>
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
    </div >
  )
}

export default Battlerite
