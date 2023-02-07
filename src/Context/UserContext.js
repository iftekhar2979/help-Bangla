import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext=createContext()
const UserContext = ({children}) => {
    const googleProvider=new GoogleAuthProvider()
    const [admin,setAdmin]=useState()
    useEffect(()=>{
        if(!admin){
            setAdmin(JSON.parse(sessionStorage.getItem('user')))
        }
    })
    

    const [users,setUsers]=useState(null)
    const [loading,setLoading]=useState(true)
    const auth = getAuth(app);
    const createNewUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleCustomSignOut=()=>{
        setAdmin('')
        sessionStorage.removeItem('user');
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser=()=>{
        // setLoading(true);
        return signOut(auth)
    }
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            // console.log(currentUser);
            if (currentUser) {
                setLoading(false)
                setUsers(currentUser);
              }else{
                setLoading(false)
              }
        
              return () => unSubscribe();
            });

    },[])
    const info={
        users,setUsers,createNewUser,signIn,signOutUser,loading,setAdmin,admin,handleCustomSignOut,signInWithGoogle

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;