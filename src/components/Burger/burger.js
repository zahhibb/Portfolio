import React from 'react';
import { StyledBurger } from '../';

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </StyledBurger>
    )
}

export default Burger;