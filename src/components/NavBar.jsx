import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav nav-underline">
            <NavLink className="nav-link" activeClassName="active" exact to="/">
                Main
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/login">
                Login
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/users">
                Users
            </NavLink>
        </nav>
    );
};

export default NavBar;
