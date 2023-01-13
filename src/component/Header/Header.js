import React from 'react';
import "./Header.css"
import logo from "../../images/Logo.svg"

const Header = () => {
    return (
        <nav className='header-nav'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order Riview</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;