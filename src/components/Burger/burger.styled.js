import styled from 'styled-components';

export const StyledBurger = styled.button`
    background: transparent;
    width: 35px;
    height: 29px;
    position: relative;
    right: 45px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;

    &:focus {
        outline: none;
    }

    @media only screen and (min-width:${({ theme }) => theme.tablet}) {
        display: none;
    }

span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: ${({ theme }) => theme.lightText};
    border-radius: 6px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  
    :first-child {
        top: 0px;
        opacity: ${({ open }) => open ? '0' : '1'};
    }
    
    :nth-child(2), : nth-child(3) {
        top: 12px;
    }
    :nth-child(2) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    :nth-child(4) {
        top: 24px;
        opacity: ${({ open }) => open ? '0' : '1'};
    }
}
`