import React, { useState, useEffect } from 'react';
import './App.css';

function ProjectItem({ title, paragraph, imgClass, url }) {
  return (
    <a href={url} className={"project-item " + imgClass}>
      < div className="project-item-desc">
        <span>{title}</span>
        <span>{paragraph}</span>
      </div>
    </a>
  );
}

function SocialButton({ link, imgClass, anchorContent }) {
  return (
    <div className={"social-button " + imgClass}>
      <a href={link}>{anchorContent}</a>
    </div>
  )
}

const App = () => {
  const [loading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 1200));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!loading);
      }
    });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="main">
      <div className="content">
        <h1>Joakim Hedman</h1>
        <h2>Frontend Developer</h2><span>/</span><h2>Technical Game Designer</h2>
        <div className="socials">
          <SocialButton link={"https://www.linkedin.com/in/joakim-hedman/"} imgClass={"linkedin"} anchorContent={"LinkedIn"} />
          <SocialButton link={"https://twitter.com/Zahhibb"} imgClass={"twitter"} anchorContent={"Twitter"} />
        </div>
        <div className="projects">
          <h3>Projects I have worked on, and clients I have worked with:</h3>
          <div className="projects-container">
            <div>
              <ProjectItem title={"Battlerite"} paragraph={"(Game)"} imgClass={"battlerite"} url={"https://arena.battlerite.com/"} />
              <ProjectItem title={"Helly Hansen"} paragraph={""} imgClass={"hh"} url={"https://www.hellyhansen.com/"} />
              <ProjectItem title={"Suzuki"} paragraph={""} imgClass={"suzuki"} url={"http://www.suzuki.se/"} />
              <ProjectItem title={"Leos Lekland"} paragraph={""} imgClass={"leos"} url={"https://www.leoslekland.se/"} />
              <ProjectItem title={"SKKF"} paragraph={""} imgClass={"skkf"} url={"https://skkf.se/"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
