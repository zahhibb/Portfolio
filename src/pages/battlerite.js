import React, { useEffect } from "react";
import Navigation from "../components/Navigation/navigation";
import Footer from "../sections/footer";
import { Link } from "react-router-dom";
import "../App.css";

import BattleriteImage01 from "../resources/images/battlerite_01.jpeg";
import BattleriteImage02 from "../resources/images/battlerite_02.jpg";
import BattleriteImage03 from "../resources/images/battlerite_03.jpg";
import BattleriteImage04 from "../resources/images/battlerite_05.jpg";
import BattleriteEggBrawlImage01 from "../resources/images/easter_arena.png";
import BattleriteEggBrawlImage02 from "../resources/images/Battlerite_Dodgeball.png";
import BattleriteEggBrawlImage03 from "../resources/images/bakko_egg_brawl_01.jpg";
import BattleriteEggBrawlImage04 from "../resources/images/bakkoeggbrawl.png";

import { projectQuickLinks } from "./index";

function StatusItem({ title, content }) {
    let contentList = content.map((item, key) =>
        <h3 key={key}>{item}</h3>
    );
    return (
        <div className='status-item'>
            <h3>{title}</h3>
            {contentList}
        </div>
    );
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
                            <div className='status-panel'>
                                <StatusItem title={"Team Size"} content={["4 interns"]} />
                                <StatusItem title={"Role"} content={["Gameplay Programmer", "Technical Designer"]} />
                                <StatusItem title={"Duration"} content={["8 months"]} />
                                <StatusItem title={"Engine & Tools"} content={["Unity & proprietary engine"]} />
                            </div>
                            <div className="files">
                                <div>
                                    <a href="https://store.steampowered.com/app/504370/Battlerite/" target="_blank" rel="noopener noreferrer" title='Steam link'>Play the game on Steam</a>
                                </div>
                                <div>
                                    <a href="https://arena.battlerite.com/" target="_blank" rel="noopener noreferrer" title='Battlerite website link'>Visit the website</a>
                                </div>
                            </div>
                            <div className='definitions'>
                                <div>
                                    <h2>Summary</h2>
                                    <p>
                                        <b>Battlerite (Arena)</b> is an <i>Fantasy Top-down Team Arena Brawler</i> with focus on fast-paced action without any random elements. Two teams of 2 or 3 players fight against each other using their specialized champions with varied abilities.
                                    </p>
                                    <br />
                                    <p>Three game modes was developed for the game in 8 months during my internship (in addition with some contract work over the summer).</p>
                                </div>
                                <div>
                                    <h2>My contributions</h2>
                                    <p>
                                        I joined the studio with my specialization being in programming. The majority of my time was spent <b>prototyping and developing new game modes</b>,
                                        but I also had the pleasure to work on multiple things like <b>Encounter design</b> to update the tutorial and campaign mode, as well some minor <b>Level-</b>, and <b>Character design</b>.
                                    </p>
                                    <br />
                                    <p>
                                        Additionally I got to work on <b>UI wireframing and mockups</b> for the then upcoming UI overhaul (which you can read more about on Stunlock's at the time UI/UX designer Katey Parr's <a href="http://kateyparr.com/project/battlerite-menu" target="_blank" rel="noopener noreferrer" title='Katey Parr website article link'>breakdown</a>).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="page-media">
                        <div className="page-media-wrapper">
                            <div className="image-grid">
                                <img src={BattleriteImage01} alt="Battlerite match pre-engagement" />
                                <img src={BattleriteImage02} alt="Battlerite 1 versus 1 battle" />
                                {/* <img src={BattleriteImage03} alt="Battlerite 2 versus 1 battle" />
                                <img src={BattleriteImage04} alt="Battlerite match winning screen" /> */}
                            </div>
                        </div>
                    </section>
                    <section className="page-section general">
                        <div className="content-section-wrapper">
                            <div className="content">
                                <h2>Creating a game mode</h2>
                                <p>
                                    The work began by disassembling already defined game modes that other games tend to use, to see if it could fit well into Battlerite's combat-filled and tumultuous gameplay, and possibly find out if something unique could be discovered.
                                </p>
                                <br />
                                <p>
                                    My thought process on breaking down Battlerite's system and mechanics into relative parts were:
                                </p>
                                <ul>
                                    <li>
                                        Mirrored maps - Possibility for CTF (Capture the flag) or Payload (Tug-of-war) modes.
                                    </li>
                                    <li>
                                        Health orbs - Almost endless possibilities for different kinds of power-ups (damage boosts, ability improvement, “XP”-orbs for level-up system, etc.)
                                    </li>
                                    <li>
                                        Energy* orbs - Also usable for power-ups, but may be more appropriate to use the big orb for modes to push/kick, protect, or destroy it. Could also expand on the mechanics of the spawning platform (of the big orb) to use it as a King-of-the-hill game mode.
                                    </li>
                                </ul>
                                <p><i>
                                    *Energy builds up through successful blows in combat, by destroying the big center orb that spawns, or picking up yellow orbs that drop from fallen teammates.
                                </i></p>
                                <br />
                                <p>
                                    Taking into account what I learned from my breakdown I went for the Payload system. I felt it could be extended further into other modes, and that I needed to work fast and iterative on this to find what is actually fun to do outside of Battlerite's tight and calculated combat.
                                </p>
                                <br />
                                <h2>Re-design of UI</h2>
                                <p>hallå där</p>
                                <br />
                                <h2>Tutorial & Encounters</h2>
                                <p>hallå där</p>
                            </div>
                        </div>
                    </section>

                    <section className="page-section bakko-egg-brawl">
                        <div className="content-section-wrapper">
                            <div className="content">
                                <div className="content-image header"></div>
                                <img className="content-image first" src={BattleriteEggBrawlImage01} alt="Battlerite Bakko's Egg Brawl characters and assets" />
                                <h2>Bakko's Egg Brawl</h2>
                                <p>
                                    The first significant project I worked on at Stunlock Studios was <b>Bakko's Egg Brawl</b>, or just simply <i>Dodgeball</i> as we called it internally.
                                </p>
                                {/* <p>The base prototype came from one of the game designer interns that were prototyping a way to quick-reflect incoming projectiles instead of using using the already established reflect mechanic which last much longer, and he had changed one ability to throw insta-kill spherical projectiles, so we called it <i>dodgeball</i>.</p> */}
                                <br />
                                <p><b>My personal work on this project consisted of:</b></p>
                                <ul>
                                    <li>Designing and implementing a drop/pick-up mechanic, and also a small system to visually change a Champion's current weapon slot into a picked up item.</li>
                                    <li>Creating basic system for spawning randomized items of different types at specific locations.</li>
                                    <li>Game balancing & spell effects modifications.</li>
                                </ul>
                                <br />
                                <img className="content-image second" src={BattleriteEggBrawlImage02} alt="Battlerite Bakko's Egg Brawl dodgeball prototype" />
                                <br />
                                <p></p>
                                <br />
                                <p>
                                    Our mentor, a senior Technical Artist at the studio, took notice of what we were doing and pitched the prototype that we were working on to the rest of the studio, which got greenlit for the upcoming easter event.
                                </p>
                                <p>asd</p>
                                <br />
                                {/* <p>
                                    At that moment the Champion we used for our dodgeball mode was <i>Lucie</i>, a petite alchemist girl, which we used because she had both a dodge and throwing mechanic, and animations for both, but was changed into <i>Bakko</i>, a burly shield-wielding warrior instead because he had the more appropriate reflect mechanic and a throwing animation as well.
                                </p> */}
                                <br />
                                <p style={{ clear: "left" }}>Read more about it on the official <a href="https://blog.stunlock.com/dev-blog-010/" target="_blank" title="Battlerite blog website link" rel="noopener noreferrer">Battlerite DevBlog</a>.</p>
                                <div className="image-grid">
                                    <img src={BattleriteEggBrawlImage03} alt="Battlerite Bakko's Egg Brawl reflecting egg" />
                                    <img src={BattleriteEggBrawlImage04} alt="Battlerite Bakko's Egg Brawl 4 player standoff" />
                                </div>
                                <div className="video-wrapper">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lPjtXo3sNlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="page-section rocket-balloon">
                        <div className="content-section-wrapper">
                            <div className="image"></div>
                            <div className="content">
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
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/KU6Ra-P746k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="quick-links">
                    <div className="quick-link-container">
                        <Link to={projectQuickLinks[1].link}></Link>
                        <span className="quick-link-text">Next Project</span>
                        <span className="quick-link-title">{projectQuickLinks[1].name}</span>
                        <span className="quick-link-image"></span>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Battlerite;
