import styled from 'styled-components';

export const StyledMobileNav = styled.nav`
    position: relative;

    @media only screen and (min-width:${({ theme }) => theme.tablet}) {
        display: none;
    }

    .nav-owner {
        display: none;
    }

    ul {
        height: 100%;
        list-style: none;
        position: relative;
        top: 30%;
    }

    ul li {
        margin: 1rem 0;
    }

    a {
        color: ${({ theme }) => theme.navText};
        text-decoration: none;
        padding: 1rem 0;
        display: block;
        font-size: 1.5rem;
        letter-spacing: 2px;
    }

    a:active, a:focus {
        color: ${({ theme }) => theme.lightText};
    }

    .active {
        color: ${({ theme }) => theme.lightText};
    }

.mobile-nav-cover {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: rgba(34, 34, 34, 0.97);
    z-index: 2;
}
`