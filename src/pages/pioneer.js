import React, { useEffect } from "react";
import Navigation from "../components/Navigation/navigation";
import Footer from "../sections/footer";
import { Link } from "react-router-dom";
import "../App.css";

import PioneerImage01 from "../resources/images/battlerite_01.jpeg";
import PioneerImage02 from "../resources/images/battlerite_02.jpg";

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

const Pioneer = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="page">
            <Navigation />
            <div className="page-container pioneer">
                <div className="page-banner">
                    <div className="banner-overlay"></div>
                    <h1>"Pioneer" - FPS UI concept</h1>
                </div>
                <div className="page-content" id="content">
                    <section className="page-intro">
                        <div className="page-intro-wrapper">
                            <div className='status-panel'>
                                <StatusItem title={"Team Size"} content={["Personal"]} />
                                <StatusItem title={"Duration"} content={["4 weeks"]} />
                                <StatusItem title={"Engine & Tools"} content={["Unity, Figma, Photoshop"]} />
                            </div>
                            <div className="files">
                                {/* <div>
                                    <a href="http://www.google.se" target="_blank" rel="noopener noreferrer" title=''>Watch video</a>
                                </div>
                                <div>
                                    <a href="http://www.google.se" target="_blank" rel="noopener noreferrer" title=''>Try out prototype</a>
                                </div> */}
                            </div>
                            <div className='definitions'>
                                <div>
                                    <h2>Summary</h2>
                                    <p>
                                        content coming soon..
                                    </p>
                                </div>
                                <div>
                                    <h2>My contributions</h2>
                                    <p>
                                        content coming soon..
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section className="page-media">
                        <div className="page-media-wrapper">
                            <div className="image-grid">
                                <img src={PioneerImage01} alt="asd" />
                                <img src={PioneerImage02} alt="asd" />
                            </div>
                        </div>
                    </section> */}
                    {/* <section className="page-media">
                        <div className="page-media-wrapper">
                            <div className="video-wrapper">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/KU6Ra-P746k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </section> */}
                </div>

                <div className="quick-links">
                    <div className="quick-link-container prev">
                        <Link to={projectQuickLinks[1].link}></Link>
                        <span className="quick-link-text">Prev Project</span>
                        <span className="quick-link-title">{projectQuickLinks[1].name}</span>
                        <span className="quick-link-image"></span>
                    </div>
                    <div className="quick-link-container">
                        <Link to={projectQuickLinks[3].link}></Link>
                        <span className="quick-link-text">Next Project</span>
                        <span className="quick-link-title">{projectQuickLinks[3].name}</span>
                        <span className="quick-link-image"></span>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Pioneer;
