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

const Battlefield6 = () => {
    return (
        <div className="page">
            <Navigation />
            <div className="page-container battlefield6">
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
                                        asd
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
                                <img src={BattleriteImage01} alt="Battlefield image 1" />
                                <img src={BattleriteImage02} alt="Battlefield image 1" />
                                <img src={BattleriteImage03} alt="Battlefield image 1" />
                                <img src={BattleriteImage04} alt="Battlefield image 1" />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="quick-link-container prev">
                        <Link to={projectQuickLinks[3].link}></Link>
                        <span className="quick-link-text">Prev Project</span>
                        <span className="quick-link-title">{projectQuickLinks[3].name}</span>
                        <span className="quick-link-image"></span>
                    </div>
                {/* <div className="quick-links">
                    <div className="quick-link-container">
                        <Link to={projectQuickLinks[2].link}></Link>
                        <span className="quick-link-text">Next Project</span>
                        <span className="quick-link-title">{projectQuickLinks[2].name}</span>
                        <span className="quick-link-image"></span>
                    </div>
                </div> */}
            </div>
            <Footer />
        </div >
    )
}

export default Battlefield6
