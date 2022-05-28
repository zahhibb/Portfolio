import styled from "styled-components";

import logoDefault from "../../resources/images/logo-default.png";
import logoHover from "../../resources/images/logo-hover.png";

import homeDefault from "../../resources/images/home-default.png";
import homeActive from "../../resources/images/home-active.png";
import homeHover from "../../resources/images/home-hover.png";
import aboutDefault from "../../resources/images/about-default.png";
import aboutActive from "../../resources/images/about-active.png";
import aboutHover from "../../resources/images/about-hover.png";

export const StyledDesktopNav = styled.nav`
  display: flex;
  background: ${({ theme }) => theme.transparentBackground};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;

  .nav-owner a {
    color: ${({ theme }) => theme.lightText};
    text-decoration: none;
  }

  > ul {
    display: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    align-items: center;
    justify-items: center;
    justify-content: unset;
    padding: 0;

    .nav-owner {
      flex: 1;
      text-align: left;
      height: 70px;
    }
    .nav-owner a {
      color: rgba(255, 255, 255, 0);
      height: 100%;
      width: 70px;
      display: inline-block;
      background: url(${logoDefault});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    .nav-owner a:hover {
      background: url(${logoHover});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    ul {
      flex: 4;
      display: flex;
      list-style: none;
    }
    ul li {
      flex: 1;
      display: inline-block;
    }
    ul li:first-child {
      text-align: right;
    }
    ul li:last-child {
      text-align: left;
    }
    ul li a {
      font-size: 0.8rem;
      // font-weight: 400;
      letter-spacing: 2px;
      color: ${({ theme }) => theme.navText};
      text-decoration: none;
      padding: 1.75rem 1.4rem 0.2rem 1.4rem;
      display: inline-block;
      min-width: 50px;
      position: relative;
    }
    .home {
      display: inline-block;
      position: absolute;
      bottom: 30px;
      left: 45%;
      width: 19px;
      height: 21px;
      background: url(${homeHover});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    .about {
      display: inline-block;
      position: absolute;
      bottom: 30px;
      left: 43%;
      width: 20px;
      height: 24px;
      background: url(${aboutHover});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    ul li a:hover .home {
      background: url(${homeDefault});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    ul li a:hover .about {
      background: url(${aboutDefault});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    ul li a:hover {
      color: ${({ theme }) => theme.lightText};
    }
    .active {
      color: ${({ theme }) => theme.orangeText} !important;
      border-bottom: 2px solid #fff;
      text-decoration: none;
    }
    .active .home {
      background: url(${homeActive}) !important;
      background-repeat: no-repeat !important;
      background-position: center !important;
      background-size: contain !important;
    }
    .active .about {
      background: url(${aboutActive}) !important;
      background-repeat: no-repeat !important;
      background-position: center !important;
      background-size: contain !important;
    }
    .nav-socials {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
`;
