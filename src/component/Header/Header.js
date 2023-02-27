import React, { useContext } from 'react';
import "./Header.css"
import logo from "../../images/Logo.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <nav className='header-nav'>
            <img src={logo} alt="" />
            <div>
                <Link to="shop">Shop</Link>
                <Link to="Order Riview">{}</Link> 
                <Link to="inventory">Manage Inventory</Link>
                <Link to="order">Order</Link> 
                <Link to="about">About</Link> 
                <Link to="login">LogIn</Link> 
                <Link to="signup">SignUp</Link>
                <Link >{user?.displayName}</Link>
            </div>
        </nav>
    );
};

export default Header;