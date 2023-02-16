import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/longForm"}>Long Form</NavLink>
            <NavLink to={"/shortForm"}>Short Form</NavLink>
            <NavLink to={"/counter"}>Counter</NavLink>
        </div>
    );
};

export default Navbar;