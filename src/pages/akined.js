import React, { useEffect } from 'react'
import Navigation from "../components/Navigation/navigation";
import Footer from "../sections/footer";
import { Link } from "react-router-dom";
import "../App.css";

import AkinedImage01 from "../resources/images/akined_gameplay1.png";
import AkinedImage02 from "../resources/images/akined_gameplay2.png";

import GDD from "../resources/documents/AKINED - GDD.pdf";
import PostMortem from "../resources/documents/Post_Mortem_-_Game_Project_1_Akined_JoakimHedman.pdf";
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

const Akined = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="page">
            <Navigation />
            <div className="page-container akined">
                <div className="page-banner">
                    <div className='banner-overlay'></div>
                    <h1>Akined</h1>
                </div>
                <div className="page-content" id="content">
                    <section className="page-intro">
                        <div className="page-intro-wrapper">
                            <div className='status-panel'>
                                <StatusItem title={"Team Size"} content={["4"]} />
                                <StatusItem title={"Role"} content={["Programmer", "Game Designer", "Level Designer"]} />
                                <StatusItem title={"Duration"} content={["4 weeks"]} />
                                <StatusItem title={"Engine"} content={["Unity"]} />
                            </div>
                            <div className="files">
                                <div>
                                    <a href="https://zahhibb.itch.io/akined" target="_blank" rel="noopener noreferrer">Play the game</a>
                                </div>
                                <div>
                                    <a href={GDD} target="_blank" rel="noopener noreferrer">Read the GDD</a>
                                </div>
                                <div>
                                    <a href={PostMortem} target="_blank" rel="noopener noreferrer">Read the Post-Mortem</a>
                                </div>
                            </div>
                            <div className='definitions'>
                                <div>
                                    <h2>Summary</h2>
                                    <p>
                                        <b>Akined</b> is an <i>Isometric Top-down Puzzle</i> game where the player takes control of Adam and the Spirit attached to him. The goal is to help Adam escape from the dungeon that he suddenly woke up in through the help of the Spirit that has the ability to possess objects.
                                    </p>
                                    <br />
                                    <p>
                                        The game was made in 4 weeks by 4 people; 2 UX designers and 2 Project managers.
                                    </p>
                                </div>
                                <div>
                                    <h2>My contributions</h2>
                                    <p>
                                        While I initially was going to focus on UX and Level design as is the direction of my studies and my interest, but I had to step up and be the programmer of this project because of some unforeseen circumstances that both of the programmers assigned to our team left the education.
                                    </p>
                                    <p>
                                        I fortunately had some experience in <b>C# programming</b> and <b>Unity</b> so we could still create a game, though we had to re-scope the project a lot.
                                    </p>
                                    <br />
                                    <p>
                                        On this project I worked on <b>programming</b>, <b>level-</b> & <b>system design</b>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="page-media">
                        <div className="page-media-wrapper">
                            <div className="image-grid">
                                <img src={AkinedImage01} alt="asd" />
                                <img src={AkinedImage02} alt="asd" />
                            </div>
                        </div>
                    </section>
                    <section className="page-section general">
                        <div className="content-section-wrapper">
                            <div className="content">
                                <h2>Concept</h2>
                                <p>
                                    As this game was made during my game design & UX education we had specific rulesets set by the school that defined what kind of genre of game we were going to make, which were to create a:
                                </p>
                                <ul>
                                    <li>
                                        3D Puzzle Platformer game
                                    </li>
                                    <li>
                                        Inside Unity
                                    </li>
                                    <li>
                                        In 4 weeks
                                    </li>
                                </ul>
                                <br />
                                <p>
                                    All the graphical and audio assets used were either provided to us by the school or were free/CreativeCommons.
                                </p>
                                <br />
                                <p>
                                    As with any project we began with brainstorming and pitching our ideas to each other and additionally setting up an early planning/schedule on how long we could spend on a specific task. We decided right away to spend the entire first week on planning and concepting to be thorough and quite specific in what features we wanted in the final game.
                                </p>
                                <br />
                                <p>
                                    The concept we decided on was a combination of one of my and the other UX designer’s ideas, which were a horror-esque puzzle game where you could switch between 2 characters; a living human and a spirit/devil, trying to escape a house of traps.
                                </p>
                                <br />
                                <p>
                                    The idea got defined a bit more and evolved into a dungeon-escape game where the player has to use both of the characters to interact with things in the environment and possess objects out of reach. When they finally reach the exit it ends with them being led by the Grim Reaper to the afterlife. The Grim Reaper is a recurring character in each level, though only in text form, where they act as a medium for tutorial and narrative.
                                </p>
                                <br />
                                <h2>Process</h2>
                                <p>asd</p>
                            </div>
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
                    <div className="quick-link-container prev">
                        <Link to={projectQuickLinks[0].link}></Link>
                        <span className="quick-link-text">Prev Project</span>
                        <span className="quick-link-title">{projectQuickLinks[0].name}</span>
                        <span className="quick-link-image"></span>
                    </div>
                    <div className="quick-link-container">
                        <Link to={projectQuickLinks[2].link}></Link>
                        <span className="quick-link-text">Next Project</span>
                        <span className="quick-link-title">{projectQuickLinks[2].name}</span>
                        <span className="quick-link-image"></span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Akined