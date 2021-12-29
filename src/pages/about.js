import React from 'react'
import Navigation from "../components/Navigation/navigation";
import Footer from "../sections/footer";

const About = () => {
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
                <div className='about-content'>
                    <div className='about-me'>
                        <h2>About me</h2>
                        <div className='who-am-i'>
                            <h3>Who am I?</h3>
                            <p>asd asd asd asd asd asd asd</p>
                        </div>
                        <div className='as-a-developer'>
                            <h3>As a developer</h3>
                            <p>asd asd asd asd asd asd asd</p>
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
