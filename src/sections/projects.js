import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

import { projectRef } from "./navigation.js";

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

class ProjectsSection extends Component {
  render() {
    return (
      // <section className="projects" id="projects" ref={projectRef}>
      <section className="projects" id="projects">
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
                {/* <ProjectItem
                  title={"Battlerite"}
                  description={"Started out the first 3 months as a intern prototyping and developing game modes for the team-arena-brawler Battlerite, where 2 of game modes where released to the public to positive acclaim. After my internship I got employed during the summer to work further on prototyping game modes and improving their new-player experience, and more."}
                  url={"/battlerite"}
                  imgClass={"battlerite"}

                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectsSection;
