import React, { useEffect } from 'react'
import Navigation from "../components/Navigation/navigation";
import Footer from "../sections/footer";
import { Link } from "react-router-dom";
import "../App.css";

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
                                <StatusItem title={"Role"} content={["Programmer", "Game Designer"]} />
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