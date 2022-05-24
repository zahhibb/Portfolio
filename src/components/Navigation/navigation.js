import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Burger from "../Burger/burger";
import MobileNav from "./mobile_navigation";
import { StyledDesktopNav } from "../";

const Navigation = () => {
  // Mobile navigation
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-container">
      <StyledDesktopNav>
        <div className="nav-owner">
          <Link to={"/#home"}>Joakim Hedman</Link>
        </div>
        <ul>
          <li>
            <NavLink exact to={"/#home"}>
              <span className="home"></span>
              <span>PORTFOLIO</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to={"/about"}>
              <span className="about"></span>
              <span>ABOUT</span>
            </NavLink>
          </li>
        </ul>
        <div className="nav-socials"></div>
        <Burger open={open} setOpen={setOpen} />
      </StyledDesktopNav>
      <MobileNav open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navigation;
