import React from 'react'
import Navigation from "../components/Navigation/navigation";
import ScrollArrow from "../components/ScrollArrow/scroll_arrow.js";
import Footer from "../sections/footer";
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

const Akined = () => {
    return (
        <div className="page">
            <Navigation />
            <div className="page-container akined">
                <div className="page-banner">
                    <ScrollArrow />
                </div>
                <div className="page-content" id="content">
                    <section className="page-intro">
                        <div className="page-intro-wrapper">
                            <div className='status-panel'>
                                <StatusItem title={"Team Size"} content={["4"]} />
                                <StatusItem title={"Role"} content={["Programmer", "Game Designer"]} />
                                <StatusItem title={"Duration"} content={["4 weeks"]} />
                            </div>
                            <div className="files">
                                <div>
                                    <h3>Play the game</h3>
                                    <div>
                                        <a href="https://zahhibb.itch.io/akined" target="_blank"></a>
                                    </div>
                                </div>
                                <div>
                                    <h3>GDD</h3>
                                    <div>
                                        <a href="#" download></a>
                                    </div>
                                </div>
                                <div>
                                    <h3>Post-mortem</h3>
                                    <div>
                                        <a href="#" download></a>
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
                                <div>
                                    <h2>My contributions</h2>
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
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/mgAJ-adILGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="image-grid">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
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