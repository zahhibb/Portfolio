import styled from 'styled-components';

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

    >ul {
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
    }
    .nav-owner a {
        display: inline-block;
        color: ${({ theme }) => theme.lightText};
        margin-left: 2rem;
        text-decoration: none;
        transition: color 0.3s;
        min-width: 135px;
    }
    .nav-owner a:hover {
        color: ${({ theme }) => theme.primaryText};
    }
    .nav-owner a::after {
        content: '';
        width: 0px;
        height: 1px;
        display: block;
        background: ${({ theme }) => theme.primaryText};
        transition: 300ms;
    }
    .nav-owner a:hover::after {
        width: 100%;
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
    ul li:first-child{
        text-align: right;
    }
    ul li:last-child {
        text-align: left;
    }
    ul li a {
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 2px;
        color: ${({ theme }) => theme.navText};
        text-decoration: none;
        padding: 0.75rem 1.5rem 0.75rem 1.5rem;
        display: inline-block;
        transition: color 0.3s;
        min-width: 50px;
    }
    ul li:first-child a {
        // margin-right: 1rem;
    }
    ul li:last-child a {
        // margin-left: 1rem;
    }
    ul li a:hover {
        color: ${({ theme }) => theme.lightText};
    }
    .active {
        color: ${({ theme }) => theme.orangeText};
        border-bottom: 2px solid #fff;
        text-decoration: none;
    }
    .nav-socials {
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
}
`