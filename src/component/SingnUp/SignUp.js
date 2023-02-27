import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"

const SignUp = () => {
    return (
        <div className='form-container'> 
            <h2 className='log-text'>LogIn</h2>
            <form >
                <div className='form-input'>
                    <label htmlFor="eamil">Email</label>
                    <input type="email" name='email' placeholder='email' required />
                </div>
                <div className='form-input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='password' required />
                </div>
                <div className='form-input'>
                    <label htmlFor="Confirm">Confirm Password</label>
                    <input type="password" name='Confirm' placeholder='Confirm password' required />
                </div>
                <button className='button-log'>Sign UP</button>
                <h3 className='logo'>Login</h3>
                <p>Already have an account? <Link to="/login">Log IN</Link> </p>
                
            </form>
        </div>
    );
};

export default SignUp;