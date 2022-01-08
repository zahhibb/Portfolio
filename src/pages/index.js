import React from 'react';
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
                <span className='tag'>{tag}</span>
                <Link to={url}></Link>
                <p className="item-title">{title}</p>
                <span className="item-desc">{description}</span>
            </div>
        </div>
    );
}

function OtherProjectItem({ title, url, imgClass, tag }) {
    return (
        <div className="other-project-item-container">
            <div className={"other-project-item " + imgClass}>
                <span className='tag'>{tag}</span>
                <Link to={url}></Link>
                <p className="other-item-title">{title}</p>
            </div>
        </div>
    );
}

const index = () => {

    // Highlight navigation scroll
    // const introRef = React.UseRef(null)
    // const projectsRef = React.UseRef(null)
    // const aboutRef = React.UseRef(null)

    // React.useEffect(() => {
    //     let observer;
    //     if (introRef.current && projectsRef.current && aboutRef.current) {
    //         const options = {
    //             threshold: 0.5,
    //         }
    //         observer = new IntersectionObserver((entries, observer) => {
    //             entries.forEach(entry => {
    //                 const navElement = document.querySelector(
    //                     `a[href="/#${entry.target.id}"]`,
    //                 )
    //                 if (entry.isIntersecting) {
    //                     if (!navElement.classList.contains('active')) {
    //                         navElement.classList.add('active')
    //                     }
    //                 } else if (navElement.classList.contains('active')) {
    //                     navElement.classList.remove('active')
    //                 }
    //             })
    //         }, options)
    //         observer.observe(introRef.current)
    //         observer.observe(projectsRef.current)
    //         observer.observe(aboutRef.current)
    //     }
    //     return () => observer.disconnect()
    // }, [introRef, projectsRef, aboutRef])

    return (
        <div className="container">
            {/* <section className="intro" id="home" ref={introRef}> */}
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
                        <p className="paragraph">I'm Joakim, a <strong>Game and UX designer</strong> with about 3 years of experience developing games inside Unity.</p>
                        <p className='paragraph'>While my expertise lies in UX and UI Design, some of my other favorite topics are Game- and Level design.</p>
                        <p className="paragraph">Below you will find some of my highlighted projects in Game development; including professional, formal, and personal.</p>
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
            <section className="projects" id="projects">
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
                                    tag={"Game"}
                                />
                                <ProjectItem
                                    title={"Akined"}
                                    description={"School Game Project"}
                                    url={"/akined"}
                                    imgClass={"akined"}
                                    tag={"Game"}
                                />
                                <ProjectItem
                                    title={"FPS UI"}
                                    description={"School assignment"}
                                    url={"/pioneer"}
                                    imgClass={"pioneer"}
                                    tag={"UX/UI"}
                                />
                                <ProjectItem
                                    title={'Battlefield "6"'}
                                    description={"Personal project"}
                                    url={"/battlefield6"}
                                    imgClass={"battlefield6"}
                                    tag={"UI"}
                                />
                                {/* <ProjectItem
                                    title={"Canvas Climber"}
                                    description={"School assignment"}
                                    url={"/canvasclimber"}
                                    imgClass={"canvasclimber"}
                                    tag={"Game"}
                                /> */}
                            </div>
                        </div>
                        <hr />
                        <div className='other-projects'>
                            <h2>Other projects</h2>
                            <div className='other-projects-list'>
                                <OtherProjectItem
                                    title={"Outvaders Must Die"}
                                    url={"/outvadersmustdie"}
                                    imgClass={"outvaders"}
                                    tag={"GAME"}
                                />
                                <OtherProjectItem
                                    title={"SKKF"}
                                    url={"/skkf"}
                                    imgClass={"skkf"}
                                    tag={"WEBSITE"}
                                />
                                {/* <OtherProjectItem
                                    title={"Helly Hansen"}
                                    url={"/hellyhansen"}
                                    imgClass={"hellyhansen"}
                                    tag={"WEBSITE"}
                                /> */}
                                <OtherProjectItem
                                    title={"Leo's Lekland"}
                                    url={"/leoslekland"}
                                    imgClass={"leos"}
                                    tag={"WEBSITE"}
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