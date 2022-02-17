import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

export var projectQuickLinks = [
    {
        name: "battlerite",
        link: "/battlerite"
    },
    {
        name: "akined",
        link: "/akined"
    },
    {
        name: "FPS UI",
        link: "/pioneer"
    },
    {
        name: 'Battlefield "6"',
        link: "/battlefield6"
    },
    {
        name: "Canvas Climber",
        link: "/canvasclimber"
    },
    {
        name: "Outvaders Must Die",
        link: "/outvaders"
    },
    {
        name: "SKKF",
        link: "/skkf"
    },
    {
        name: "Helly Hansen",
        link: "/hellyhansen"
    },
    {
        name: "Leo's Lekland",
        link: "/leoslekland"
    },
]

function ProjectItem({ title, description, url, imgClass, tag }) {
    return (
        <div className="project-item-container">
            <div className={"project-item " + imgClass}>
                <Link to={url}>
                    <span className="overlay"></span>
                    <p className="item-title">{title}</p>
                    <span className="item-desc">{description}</span>
                </Link>
                <span className='tag'>{tag}</span>
            </div>
        </div>
    );
}

function OtherProjectItem({ title, description, url, imgClass, tag }) {
    return (
        <div className="other-project-item-container">
            <div className={"other-project-item " + imgClass}>
                <Link to={url}>
                    <span className='overlay'></span>
                    <p className="other-item-title">{title}</p>
                    <span className='other-item-desc'>{description}</span>
                </Link>
                <span className='tag'>{tag}</span>
            </div>
        </div>
    );
}

const index = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <section className="intro" id="home">
                <div className="intro-container">
                    <div className="intro-heading">
                        <h1>Joakim Hedman</h1>
                        <div>
                            <h3 className='title-game'>Game & UX Designer</h3>
                        </div>
                    </div>
                    <div className="intro-description">
                        <p>Hi there!</p>
                        <p>I'm Joakim, a <strong>Game and UX designer</strong> with about 3 years of experience developing games inside Unity.</p>
                        {/* <p className='paragraph'>While my expertise lies in UX and UI Design, some of my other favorite topics are Game- and Level design.</p> */}
                        <p>Below you will find some of my highlighted projects in Game development; including professional, formal, and personal.</p>
                        <div className="social-links">
                            <div className="linkedin">
                                <a href="https://www.linkedin.com/in/joakim-hedman/" target="_blank" rel="noopener noreferrer" title='LinkedIn link'>LinkedIn</a>
                            </div>
                            <div className="artstation">
                                <a href="https://www.artstation.com/zahhibb" target="_blank" rel="noopener noreferrer" title='ArtStation link'>ArtStation</a>
                            </div>
                            <div className="twitter">
                                <a href="https://twitter.com/Zahhibb" target="_blank" rel="noopener noreferrer" title='Twitter link'>Twitter</a>
                            </div>
                            <div className="mail">
                                <a href="mailto:jocke_hedman@hotmail.com" title='Direct mail link'>Mail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects">
                <div className="projects-container">
                    <h2>Highlighted projects</h2>
                    <div className="projects-list">
                        <div className="projects-games">
                            <div className="games-list">
                                <ProjectItem
                                    title={"Battlerite"}
                                    description={"Prototyping & Game modes"}
                                    url={"/battlerite"}
                                    imgClass={"battlerite"}
                                    tag={"Programming & Game design"}
                                />
                                <ProjectItem
                                    title={"Akined"}
                                    description={"School game project"}
                                    url={"/akined"}
                                    imgClass={"akined"}
                                    tag={"Programming & Game design"}
                                />
                                <ProjectItem
                                    title={"Pioneer - FPS UI"}
                                    description={"School assignment"}
                                    url={"/pioneer"}
                                    imgClass={"pioneer"}
                                    tag={"UX/UI design"}
                                />
                                <ProjectItem
                                    title={'Battlefield "6" UI concept'}
                                    description={"Personal project"}
                                    url={"/battlefield6"}
                                    imgClass={"battlefield6"}
                                    tag={"UI design"}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className='other-projects'>
                            <h2>Other projects</h2>
                            <div className='other-projects-list'>
                                <OtherProjectItem
                                    title={"Elden Ring UI concept"}
                                    description={"Personal project"}
                                    url={"/eldenring"}
                                    imgClass={"eldenring"}
                                    tag={"UX/UI"}
                                />
                                <OtherProjectItem
                                    title={"Outvaders Must Die"}
                                    description={"Nordic Game Jam 2016"}
                                    url={"/outvadersmustdie"}
                                    imgClass={"outvaders"}
                                    tag={"Scripting & Game design"}
                                />
                                <OtherProjectItem
                                    title={"Canvas Climber"}
                                    description={"School game project"}
                                    url={"/canvasclimber"}
                                    imgClass={"canvasclimber"}
                                    tag={"Scripting & UI pixel art"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default index;