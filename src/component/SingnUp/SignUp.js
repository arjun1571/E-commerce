import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import "./SignUp.css"

const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    const [error,setError]=useState(null)
    const handleSubmit =(event)=>{
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password = form.password.value;
        const Confirm =form.Confirm.value;
        console.log(email, password, Confirm);
        if(password !== Confirm){
            setError("password do not match")
        }
        createUser(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            form.reset()
          })

          .catch((error) => {
            console.error(error)
          });
        

    }
    return (
        <div className='form-container'> 
        <p>{error}</p>
            <h2 className='log-text'>LogIn</h2>
            <form onSubmit={handleSubmit}>
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