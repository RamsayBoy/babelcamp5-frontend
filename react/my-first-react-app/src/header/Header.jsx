import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="wrapper">
            <i className="material-icons">
                menu
            </i>
            {/* TODO Add nav */}
            <div>
                Bootcamp Ecommerce
            </div>
            <i className="material-icons">
                shopping_cart
            </i>
        </header>
    );
}

export default Header;