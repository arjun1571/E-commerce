import React, { useContext } from 'react';
import "./Header.css"
import logo from "../../images/Logo.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    
    const hadleonClik=()=>{
        logOut()
        .then(() => {
            
          })
          .catch((error) => {
            console.error(error);
          });
          
    }

    return (
        <nav className='header-nav'>
            <img src={logo} alt="" />
            <div>
                <Link to="shop">Shop</Link>
                <Link to="Order Riview">{}</Link> 
                <Link to="inventory">Manage Inventory</Link>
                <Link to="order">Order</Link> 
                <Link to="about">About</Link> 
                <Link >{user?.email}</Link>
                {
                    user?.uid ? <button onClick={hadleonClik}>sign Out</button>
                    :
                    <>
                        <Link to="login">LogIn</Link> 
                        <Link to="signup">SignUp</Link>
                    </>
                }
                
                
            </div>
        </nav>
    );
};

export default Header;