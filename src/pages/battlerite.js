import React, { useEffect } from "react";
import Navigation from "../components/Navigation/navigation";
import Footer from "../sections/footer";
import ScrollArrow from "../components/ScrollArrow/scroll_arrow.js";
import { Link } from "react-router-dom";
import "../App.css";

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
            <div className="page-container">
                <div className="page-banner battlerite">
                    <ScrollArrow />
                </div>
                <div className="page-content" id="content">
                    <section className="page-intro">
                        <div className="page-intro-wrapper">
                            <div className='status-panel'>
                                <StatusItem title={"Team Size"} content={["4 interns"]} />
                                <StatusItem title={"Role"} content={["Gameplay Programmer", "Technical Designer"]} />
                                <StatusItem title={"Duration"} content={["8 months"]} />
                            </div>
                            <div className='definitions'>
                                <div>
                                    <h2>Summary</h2>
                                    <p>
                                        Battlerite (Arena) is an Fantasy Top-down Team Arena Brawler with focus on fast-paced action without any random elements. Two teams of 2 or 3 players fight against each other using their specialized champions with varied abilities.
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
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </section>
                    <section className="bakko-egg-brawl">
                        <div className="content">
                            <h2>Bakko's Egg Brawl</h2>
                            <p>asd</p>
                        </div>
                        <div className="image"></div>
                    </section>
                    <section className="rocket-balloon">
                        <div className="image"></div>
                        <div className="content">
                            <h2>Rocket Balloon</h2>
                            <p>asd</p>
                        </div>
                    </section>
                    <section className="battlegrounds">
                        <div className="content">
                            <h2>Battlegrounds</h2>
                            <p>asd</p>
                        </div>
                        <div className="image"></div>
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
