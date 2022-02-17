import React, { useEffect } from 'react'
import Navigation from "../components/Navigation/navigation";
import Footer from "../sections/footer";

import personalImg from "../resources/images/UX_21_Joakim_Hedman.png";

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="about" id="about">
            <Navigation />
            <div className="about-container">
                <div className="about-heading">
                    <h1>Joakim Hedman</h1>
                    <div>
                        <h3 className='title-game'>Game & UX Designer</h3>
                    </div>
                </div>
                <div className='about-image-wrapper'>
                    <div>
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
                        <div className='files'>
                            <div>
                                <a href='http://www.google.se' target="_blank" rel="noopener noreferrer" title='Resume link'>View my resume</a>
                            </div>
                        </div>
                    </div>
                    <img src={personalImg} alt='Joakim Hedman' />
                </div>
                <div className='about-content'>
                    <div className='about-me'>
                        <div className='who-am-i'>
                            <h3><u>Who am I?</u></h3>
                            <p>
                                Well, I consider myself an honest, happy, and proactive guy with great interest in games and game development. For a bit more down-to-earth introduction would be to say that I simply love trying out news things in life, be it from trying out new foods, to travelling, to further even taking on all manner of jobs I can get my hands on.
                            </p>
                            <br />
                            <p>The interest of making games came from quite an early age where I first began by editing values in game files to modify stats of units inside <a href='https://en.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III' target="_blank" rel="noopener noreferrer">Heroes of Might and Magic 3</a>, <i>one of my most favourite games of all time</i>.</p>
                            <p>Further down the line I began messing around with map-editors in <a href='https://en.wikipedia.org/wiki/Warcraft_III:_The_Frozen_Throne' target="_blank" rel="noopener noreferrer">Warcraft 3</a> and <a href='https://en.wikipedia.org/wiki/Crysis' target="_blank" rel="noopener noreferrer">Crysis</a>, where I at the time grew a small community of users and creators.</p>
                        </div>
                        <div className='as-a-developer'>
                            <h3><u>As a developer...</u></h3>
                            <p>
                                ...I try my hardest to have laser focus on the task at hand and enjoy delving down into the nitty-gritty details. My approach is to break down ideas into bite-sized, easily malleable systems and mechanics, and further using what I learned to plan out a thorough plan of action.
                            </p>
                            <br />
                            <p>
                                I consider my strengths to be my technical knowledge combined with my lateral design-thinking with focus on player agency. My workflows are inherently practical where I ideate, design, and prototype using tangible tools and methods such as card-sorting, assumption-testing, and paper-prototypes.
                            </p>
                        </div>
                    </div>
                    <div className='resume'>
                        <div className='experiences'>
                            <h3>Experiences</h3>
                            <div>
                                <h4>System Developer</h4>
                                <p>asd</p>
                            </div>
                        </div>
                        <div className='education'>
                            <h3>Education</h3>
                            <div>
                                <h4>Game & UX Design</h4>
                                <p>asd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default About
