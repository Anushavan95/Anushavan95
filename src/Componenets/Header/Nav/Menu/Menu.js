/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Menu = props => (
    <div className="menuSection">
        <div
            className={`hamburger ${props.showMenu
            ? "open"
            : ""}`}
            onClick={props.setHeaderState()}>
            <span className="burgerList"></span>
        </div>

    </div>
)

export default Menu;