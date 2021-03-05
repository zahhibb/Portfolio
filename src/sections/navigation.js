import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../components/burger";
import MobileNav from "./mobile_navigation";
import "../App.css";

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Navigation = () => {

  const [open, setOpen] = useState(false);  // for mobile nav


  // const headerRef = useRef(null);
  // const projectRef = useRef(null);

  // const sectionRefs = [
  //   { section: "Project", ref: projectRef },
  // ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { height: headerHeight } = getDimensions(headerRef.current);
  //     const scrollPosition = window.scrollY + headerHeight;

  //     const selected = sectionRefs.find(({ section, ref }) => {
  //       const ele = ref.current;
  //       if (ele) {
  //         const { offsetBottom, offsetTop } = getDimensions(ele);
  //         return scrollPosition > offsetTop && scrollPosition < offsetBottom;
  //       }
  //     });

  //     if (selected && selected.section !== visibleSection) {
  //       setVisibleSection(selected.section);
  //     } else if (!selected && visibleSection) {
  //       setVisibleSection(undefined);
  //     }
  //   };

  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [visibleSection]);

  return (
    <div className="nav-container">
      <nav className="desktop-navigation">
        <div className="nav-owner">
          <Link to={"/"}>Joakim Hedman</Link>
        </div>
        <ul>
          <li>
            <a href="/#home" className="nav-active">HOME</a>
          </li>
          <li>
            {/* <a href="/#projects" onClick={() => { scrollTo(projectRef.current) }}>PROJECTS</a> */}
            <a href="/#projects">PROJECTS</a>
          </li>
          <li>
            <a href="/#about">ABOUT</a>
          </li>
        </ul>
        <div className="nav-socials">
          <span className="linkedin">
            <a href="https://www.linkedin.com/in/joakim-hedman/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
        </div>
        <Burger open={open} setOpen={setOpen} />
      </nav>
      <MobileNav />
    </div>
  );
}

export default Navigation;
