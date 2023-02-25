import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const LogIn = () => {
    return (
        <div className='form-container'> 
            <h2 className='log-text'>LogIn</h2>
            <form >
                <div className='form-input'>
                    <label htmlFor="eamil">Email</label>
                    <input type="text" name='email' placeholder='email' required />
                </div>
                <div className='form-input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='password' required />
                </div>
                <button className='button-log'>Log IN</button>
                <h3 className='logo'>Login</h3>
                <p>New to Ema-john? <Link to="/signup">Create New Accout</Link> </p>
                <button className='button-log'>Continue With Google</button>
            </form>
        </div>
    );
};

export default LogIn;