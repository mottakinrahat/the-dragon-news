import React, { createContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.confg';
export const AuthContext=createContext(null);
const auth=getAuth(app);
const AuthProviders = ({children}) => {
   const [user,setUser]=useState(null)
   const[loading,setLoading]=useState(true)

   const createUser=(email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
   }
   const signInUser=(email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut=()=> {
   return signOut(auth)
   }

   useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth,loggedUser=>{
         console.log('logged user',loggedUser);
         setUser(loggedUser);
         setLoading(false)
      })
      return()=>{
        unsubscribe();
      }
   },[])

    const authInfo={
        user,loading,createUser,signInUser,logOut
    }
    return (

       
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;