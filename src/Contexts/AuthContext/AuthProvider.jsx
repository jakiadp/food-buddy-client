import React, {  useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';


const AuthProvider = ({children}) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) =>{
   setLoading(true);
   return createUserWithEmailAndPassword( auth, email, password)

  };

  const onAuthStateChanged = () =>{

  } ;

  const logInUser = ( email, password,) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  const logOut = () =>{
    setLoading(true);
    return signOut(auth)
  }

  useEffect (()=>{
    const unSubcribe = onAuthStateChanged(auth, currentUser =>{
      setLoading(false);
      setUser( currentUser);
      console.log('user in the onAuth', currentUser);

    });
    return ()=> {
      unSubcribe();
    }
  },[])




  
  
  
  
  const authInf = {

    loading,
    user,
    createUser,
    logInUser,
    logOut,
  } 
   
    return (
        <AuthContext value={authInf}>
          {children}
        </AuthContext>
    );
};

export default AuthProvider;