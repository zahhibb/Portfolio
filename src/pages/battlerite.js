import React, { useEffect } from "react";
import Navigation from "../components/Navigation/navigation";
import Footer from "../sections/footer";
import ScrollArrow from "../components/ScrollArrow/scroll_arrow.js";
import { Link } from "react-router-dom";
import "../App.css";

import BattleriteImage01 from "../resources/images/battlerite_01.jpeg";
import BattleriteImage02 from "../resources/images/battlerite_02.jpg";
import BattleriteImage03 from "../resources/images/battlerite_03.jpg";
import BattleriteImage04 from "../resources/images/battlerite_05.jpg";

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
                    <ScrollArrow />
                </div>
                <div className="page-content" id="content">
                    <section className="page-intro">
                        <div className="page-intro-wrapper">
                            <div className='status-panel'>
                                <StatusItem title={"Team Size"} content={["4 interns"]} />
                                <StatusItem title={"Role"} content={["Gameplay Programmer", "Technical Designer"]} />
                                <StatusItem title={"Duration"} content={["8 months"]} />
                                <StatusItem title={"Engine"} content={["Unity & proprietary engine"]} />
                            </div>
                            <div className="files">
                                <div>
                                    <div>
                                        <a href="https://store.steampowered.com/app/504370/Battlerite/" target="_blank">Play the game on Steam</a>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <a href="https://arena.battlerite.com/" target="_blank">Visit the website</a>
                                    </div>
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
                                        but I also had the pleasure to work on multiple things like <b>Encounter design</b> for the updated tutorial and campaign mode, as well some minor <b>Level-</b>, and <b>Character design</b>.
                                    </p>
                                    <br />
                                    <p>
                                        Additionally I got to work on <b>UI wireframing and mockups</b> for the then upcoming UI overhaul (which you can read more about on Stunlock's at the time UI/UX designer Katey Parr's <a target="_blank" href="http://kateyparr.com/project/battlerite-menu">breakdown</a>).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="page-media">
                        <div className="page-media-wrapper">
                            <div className="video-wrapper">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/KU6Ra-P746k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="image-grid">
                                <img  src={BattleriteImage01} alt="Battlerite image 1" />
                                <img  src={BattleriteImage02} alt="Battlerite image 1" />
                                <img  src={BattleriteImage03} alt="Battlerite image 1" />
                                <img  src={BattleriteImage04} alt="Battlerite image 1" />
                                {/* <div></div>
                                <div></div>
                                <div></div>
                                <div></div> */}
                            </div>
                        </div>
                    </section>
                    <section className="bakko-egg-brawl">
                        <div className="content-section-wrapper">
                            <div className="content">
                                <div className="content-image -first"></div>
                                <h2>Bakko's Egg Brawl</h2>
                                <p>
                                    The first significant project I worked on at Stunlock Studios was <b>Bakko’s Egg Brawl</b>, or just simply <i>Dodgeball</i> as we called it internally. The base prototype came from one of the game designer interns that were prototyping a way to quick-reflect incoming projectiles instead of using using the already established reflect mechanic which last much longer, and he had changed one ability to throw insta-kill spherical projectiles, so we called it <i>dodgeball</i>.
                                </p>
                                <br />
                                <p>
                                    At the same time I was working on a pick-up system (I was trying to implement some kind of RPG weapon equipment system), while our other programmer intern was working on modifying the ricochet mechanic to be able to have projectiles bouncing all over the place until it hit a viable target.
                                </p>
                                <br />
                                <p>
                                    Our mentor, a senior Technical Artist at the studio, took notice of what we were doing and pitched the dodgeball mode to the rest of the studio which got greenlit for the upcoming easter event, and suggested that we would combine the different systems that we were working on.
                                </p>
                                <br />
                                <div className="content-image -second"></div>
                                <p>
                                    At that moment the Champion we used for our dodgeball mode was <i>Lucie</i>, a petite alchemist girl, which we used because she had both a dodge and throwing mechanic, and animations for both, but was changed into <i>Bakko</i>, a burly shield-wielding warrior, instead because he had the more appropriate reflect mechanic and a throwing animation as well.
                                </p>
                                <p>
                                    The pick-up system I worked on and implemented were expanded to handle different kinds of projectile blueprints so we could have a range of various projectiles with unique mechanics. I also worked on the pick-up spawning on defined locations around the map.
                                </p>
                                <br />
                                <p>
                                    The last thing I worked on for this particular game mode were modifying values for balance, and spell effects to better suit the Easter-event theme.
                                </p>
                                <br />
                                <p>Read more about it on the official <a href="https://blog.stunlock.com/dev-blog-010/" target="_blank">Battlerite DevBlog</a>.</p>
                                <div className="video-wrapper">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lPjtXo3sNlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="rocket-balloon">
                        <div className="content-section-wrapper">
                            <div className="image"></div>
                            <div className="content">
                                <h2>Rocket Balloon</h2>
                                <p>asd</p>
                            </div>
                        </div>
                    </section>
                    <section className="battlegrounds">
                        <div className="content-section-wrapper">
                            <div className="content">
                                <h2>Battlegrounds</h2>
                                <p>asd</p>
                            </div>
                            <div className="image"></div>
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
