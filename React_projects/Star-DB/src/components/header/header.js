import React from "react";

import './header.css';

const Header = () => {
    return (
        <header className="d-sm-flex align-items-center header">
            <h1 className="header-title">
                <a href="#">Star DB</a>
            </h1>
            <ul className="d-flex header-list">
                <li className="header-list-item">
                    <a className="header-list-item-link" href="#">People</a>
                </li>
                <li className="header-list-item">
                    <a className="header-list-item-link" href="#">Planets</a>
                </li>
                <li className="header-list-item">
                    <a className="header-list-item-link" href="#">Starships</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;