import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading , setLoading]= useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIN = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)              
                                                             
    }

    const logOut=() =>{
        setLoading(true)
        return signOut(auth)
    }

    



    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,loggedUser=>{
            console.log('logged user',loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    } ,[])
    
    const authInfo={
        user,
        loading,
        createUser,
        signIN,
        logOut,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;