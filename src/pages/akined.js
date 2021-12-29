import React from 'react'
import Navigation from "../components/Navigation/navigation";
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

const Akined = () => {
    return (
        <div className="page">
            <Navigation />
            <div className="page-container">
                <div className="page-banner akined">
                    <ScrollArrow />
                </div>
                <div className="page-content" id="content">
                    <div className="page-intro">
                        <div className='status-panel'>
                            <StatusItem title={"Team Size"} content={["4"]} />
                            <StatusItem title={"Role"} content={["Programmer", "Game Designer"]} />
                            <StatusItem title={"Duration"} content={["4 weeks"]} />
                        </div>
                    </div>
                    <div className='definitions'>
                        <div>
                            <h2>Summary</h2>
                            <p>
                                asd
                            </p>
                            <br />
                        </div>
                        <div>
                            <h2>My contributions</h2>
                            <p>
                                asd
                            </p>
                        </div>
                    </div>
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
        </div >
    )
}

export default Akined