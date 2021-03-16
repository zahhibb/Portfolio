import React from 'react';
import { Link } from "react-router-dom";

function ProjectItem({ title, description, url, imgClass }) {
    return (
        <div className="project-item-container">
            <div className={"project-item " + imgClass}>
                <Link to={url}></Link>
                <p className="item-title">{title}</p>
                <span className="item-desc">{description}</span>
            </div>
        </div>
    );
}

const index = () => {

    const introRef = React.useRef(null)
    const projectsRef = React.useRef(null)
    const aboutRef = React.useRef(null)

    React.useEffect(() => {
        let observer;
        if (introRef.current && projectsRef.current && aboutRef.current) {
            const options = {
                threshold: 0.5,
            }
            observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    const navElement = document.querySelector(
                        `a[href="/#${entry.target.id}"]`,
                    )
                    if (entry.isIntersecting) {
                        if (!navElement.classList.contains('active')) {
                            navElement.classList.add('active')
                        }
                    } else if (navElement.classList.contains('active')) {
                        navElement.classList.remove('active')
                    }
                })
            }, options)
            observer.observe(introRef.current)
            observer.observe(projectsRef.current)
            observer.observe(aboutRef.current)
        }
        return () => observer.disconnect()
    }, [introRef, projectsRef, aboutRef])

    return (
        <div className="container">
            <section className="intro" id="home" ref={introRef}>
                <div className="intro-container">
                    <div className="intro-heading">
                        <h1>Joakim Hedman</h1>
                        <div>
                            <h3 className="title-frontend">Frontend Developer</h3>
                            <span>|</span>
                            <h3 className="title-game">Game Developer</h3>
                        </div>
                    </div>
                    <div className="intro-description">
                        <p>Hello!</p>
                        <p className="paragraph">My name is Joakim and I am a <strong>frontend web developer</strong> and <strong>junior technical game designer</strong>.</p>
                        <p className="paragraph">Below you will find my portfolio and my various skills in both web- and game development.</p>
                        <p><i><u>I am currently looking for new exciting job opportunities!</u></i></p>
                        <div className="social-links">
                            <div className="linkedin">
                                <a href="https://www.linkedin.com/in/joakim-hedman/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </div>
                            <div className="twitter">
                                <a href="https://twitter.com/Zahhibb" target="_blank" rel="noopener noreferrer">Twitter</a>
                            </div>
                            <div className="mail">
                                <a href="mailto:jocke_hedman@hotmail.com">Mail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects" id="projects" ref={projectsRef}>
                <div className="projects-container">
                    <h2>Projects</h2>
                    <div className="projects-list">
                        <div className="projects-websites">
                            <h3>Websites</h3>
                            <div className="websites-list">
                                <ProjectItem
                                    title={"SKKF"}
                                    description={"Re-development of site"}
                                    url={"/skkf"}
                                    imgClass={"skkf"}
                                />
                                <ProjectItem
                                    title={"Helly Hansen"}
                                    description={"Product pages"}
                                    url={"/hellyhansen"}
                                    imgClass={"hellyhansen"}
                                />
                                <ProjectItem
                                    title={"Leo's Lekland"}
                                    description={"Modules & Support"}
                                    url={"/leoslekland"}
                                    imgClass={"leos"}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="projects-games">
                            <h3>Games</h3>
                            <div className="games-list">
                                <ProjectItem
                                    title={"Battlerite"}
                                    description={"Internship & Game modes"}
                                    url={"/battlerite"}
                                    imgClass={"battlerite"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about" id="about" ref={aboutRef}>
                <div className="about-container">
                    <div>
                        <a href="https://www.linkedin.com/in/joakim-hedman/" className="personal-photo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <div>
                        <h2>Heya there. I'm Jocke</h2>
                        <p>This is a paragraph about me and what I like to do, please enjoy!</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default index;