import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import "./Login.css"

const LogIn = () => {
     const navigate = useNavigate()
     const location = useLocation()
     const from = location.state?.from?.pathname || "/"
    
    const {signIn}=useContext(AuthContext)
    const handleOnSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            form.reset();
            navigate(from,{replace:true})
          })
          .catch((error) => {
            console.error(error);
          });
    }
    return (
        <div className='form-container'> 
            <h2 className='log-text'>LogIn</h2>
            <form onSubmit={handleOnSubmit} >
                <div className='form-input'>
                    <label htmlFor="eamil">Email</label>
                    <input type="email" name='email' placeholder='email' required />
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