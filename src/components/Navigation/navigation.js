import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Burger from "../Burger/burger";
import MobileNav from "./mobile_navigation";
import { StyledDesktopNav } from '../';

const Navigation = () => {

  // Mobile navigation
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-container">
      <StyledDesktopNav>
        <div className="nav-owner">
          <Link to={"/"}>Joakim Hedman</Link>
        </div>
        <ul>
          {/* <li>
            <Link to={"/#home"}>HOME</Link>
          </li> */}
          <li>
            <Link to={"/#home"}>PORTFOLIO</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
        </ul>
        <div className="nav-socials">
          {/* <span className="linkedin">
            <a href="https://www.linkedin.com/in/joakim-hedman/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span> */}
        </div>
        <Burger open={open} setOpen={setOpen} />
      </StyledDesktopNav>
      <MobileNav open={open} setOpen={setOpen} />
    </div >
  );
}

export default Navigation;
