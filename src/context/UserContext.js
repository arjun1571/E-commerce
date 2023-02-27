import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";


export const AuthContext = createContext()


const auth =getAuth(app)

const UserContext = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoding]=useState(true)

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email, password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoding(false)
        })
        return ()=> unSubscribe();
    } ,[])

    const authInfo = {user,createUser,signIn,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;