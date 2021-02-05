import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

// function DescriptionListSubjectItem(props) {
//   const data = props.data;
//   const descItems = data.map((item, index) =>
//     <span key={index}>{item}</span>
//   )
//   return (
//     <div className="description-list-content">
//       {descItems}
//     </div>
//   );
// }

// function ProjectItem({ title, description, descriptionList, url, imgClass }) {
//   let listItems;
//   if (descriptionList) {
//     listItems = descriptionList.map((item, index) => (
//       <div key={index}>
//         <span className="description-list-subject">{item.subject}</span>
//         <DescriptionListSubjectItem data={item.content} />
//       </div>
//     ));
//   }
//   return (
//     <div className="project-item-container">
//       <div className="project-item">
//         <Link to={url} className={imgClass}></Link>
//       </div>
//       <h3 className="item-title"><Link to={url}>{title}</Link></h3>
//       {/* <p className="item-description">{description}</p> */}
//       <div className="description-list">
//         {listItems}
//       </div>
//       <div className="project-item-button">
//         <Link to={url}>Go to project</Link>
//       </div>
//     </div>
//   );
// }

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
      <section className="projects" id="projects">
        <div className="projects-container">
          <h2>Projects</h2>
          <div className="projects-list">

            {/* <div className="projects-websites">
              <h3>Websites</h3>
              <div className="websites-list">
                <ProjectItem
                  title={"SKKF"}
                  description={"Lorem ipsum ahmet dolor, Lorem ipsum ahmet dolor Lorem ipsum ahmet dolorLorem ipsum ahmet dolor Lorem ipsum ahmet dolor. Lorem ipsum ahmet dolor."}
                  descriptionList={[
                    {
                      subject: "Languages",
                      content: ["PHP", "JavaScript", "jQuery"]
                    },
                    {
                      subject: "Platform",
                      content: ["Wordpress"]
                    },
                    {
                      subject: "Team size",
                      content: ["2"]
                    },
                    {
                      subject: "Duration",
                      content: ["2 months"]
                    }
                  ]}
                  url={"/skkf"}
                  imgClass={"skkf"}
                />
                <ProjectItem
                  title={"Helly Hansen"}
                  description={"Lorem ipsum ahmet dolor, Lorem ipsum ahmet dolor Lorem ipsum ahmet dolorLorem ipsum ahmet dolor Lorem ipsum ahmet dolor. Lorem ipsum ahmet dolor."}
                  descriptionList={[
                    {
                      subject: "Languages",
                      content: ["PHP", "JavaScript", "jQuery", "LESS"]
                    },
                    {
                      subject: "Platform",
                      content: ["Wordpress"]
                    },
                    {
                      subject: "Team size",
                      content: ["2"]
                    },
                    {
                      subject: "Duration",
                      content: ["Indefinite"]
                    }
                  ]}
                  url={"/hellyhansen"}
                  imgClass={"hellyhansen"}
                />
                <ProjectItem
                  title={"Leos Lekland"}
                  description={"Lorem ipsum ahmet dolor, Lorem ipsum ahmet dolor Lorem ipsum ahmet dolorLorem ipsum ahmet dolor Lorem ipsum ahmet dolor. Lorem ipsum ahmet dolor."}
                  descriptionList={[
                    {
                      subject: "Languages",
                      content: ["PHP", "JavaScript", "jQuery"]
                    },
                    {
                      subject: "Platform",
                      content: ["Wordpress"]
                    },
                    {
                      subject: "Team size",
                      content: ["3"]
                    },
                    {
                      subject: "Duration",
                      content: ["Indefinite"]
                    }
                  ]}
                  url={"/leos"}
                  imgClass={"leos"}
                />
              </div>
            </div>
            <hr /> */}
            <div className="projects-games">
              <h3>Games</h3>
              <div className="games-list">
                <ProjectItem
                  title={"Battlerite"}
                  description={"Internship & Game modes"}
                  url={"/battlerite"}
                  imgClass={"battlerite"}
                />
                <ProjectItem
                  title={"Battlerite"}
                  description={"Internship & Game modes"}
                  url={"/battlerite"}
                  imgClass={"battlerite"}
                />
                {/* <ProjectItem
                  title={"Battlerite"}
                  description={"Started out the first 3 months as a intern prototyping and developing game modes for the team-arena-brawler Battlerite, where 2 of game modes where released to the public to positive acclaim. After my internship I got employed during the summer to work further on prototyping game modes and improving their new-player experience, and more."}
                  descriptionList={[
                    {
                      subject: "Genre",
                      content: ["MOBA", "PvP", "Multiplayer"]
                    },
                    {
                      subject: "Engine",
                      content: ["Unity"]
                    },
                    {
                      subject: "Platform",
                      content: ["PC"]
                    },
                    // {
                    //   subject: "Team size",
                    //   content: ["Entire studio"]
                    // },
                    {
                      subject: "Duration",
                      content: ["5 months"]
                    }
                  ]}
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
