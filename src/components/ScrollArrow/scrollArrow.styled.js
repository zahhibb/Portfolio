import styled from 'styled-components';

export const StyledScrollArrow = styled.a`
    cursor: pointer;
    position: absolute;
    bottom: 2px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;

@keyframes scroll-arrow-anim {
    0% {
        bottom: -6px;
    }
    50% {
        bottom: 0px;
    }
    100% {
        bottom: -6px;
    }
}

svg {
    fill: rgba(203, 227, 255, .75);
    margin: 0 auto;
    display: block;
    height: 48px;
    width: 48px;
    position: relative;
    animation: scroll-arrow-anim 1s infinite;
}
`