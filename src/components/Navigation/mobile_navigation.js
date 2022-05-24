import { NavLink } from "react-router-dom";
import React from "react";
import { StyledMobileNav } from '../';

const MobileNavigation = ({ open }) => {
    return (
        <StyledMobileNav open={open}>
            <div className="mobile-nav-cover">
                <ul>
                    <li>
                        <NavLink exact to={"/"}>PORTFOLIO</NavLink>
                    </li>
                    <li>
                        <NavLink exact to={"/about"}>ABOUT</NavLink>
                    </li>
                </ul>
            </div>
        </StyledMobileNav>
    );
}

export default MobileNavigation;
