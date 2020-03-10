import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header wrapper">
            <Link to="/">
                <i className="material-icons">
                    menu
                </i>
            </Link>
            {/* TODO Add nav */}
            <div>
                Bootcamp Ecommerce
            </div>
            <Link to="/shopping-car">
                <i className="material-icons">
                    shopping_cart
                </i>
            </Link>
        </header>
    );
}

export default Header;