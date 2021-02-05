import React from 'react';
import "../App.css";

const Burger = ({ open, setOpen }) => {
    return (
        <div className="mobile-navigation-button" open={open} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Burger;