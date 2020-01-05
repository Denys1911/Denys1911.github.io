import React from "react";
import {NavLink} from "react-router-dom";

import './header.css';

const Header = ({onServiceChange}) => {
    return (
        <header className="d-flex align-items-center header">
            <h1 className="header-title">
                <NavLink to="/" activeClassName="active-page" exact >
                    Star DB
                </NavLink>
            </h1>
            <ul className="d-flex header-list">
                <li className="header-list-item">
                    <NavLink to="/people/" activeClassName="active-page">People</NavLink>
                </li>
                <li className="header-list-item">
                    <NavLink to="/planets/" activeClassName="active-page">Planets</NavLink>
                </li>
                <li className="header-list-item">
                    <NavLink to="/starships/" activeClassName="active-page">Starships</NavLink>
                </li>
                <li className="header-list-item">
                    <NavLink to="/login" activeClassName="active-page">Login</NavLink>
                </li>
                <li className="header-list-item">
                    <NavLink to="/secret" activeClassName="active-page">Secret</NavLink>
                </li>
            </ul>
            <button className="btn btn-primary change-service-btn"
                    onClick={onServiceChange}>
                Change Service
            </button>
        </header>
    );
};

export default Header;