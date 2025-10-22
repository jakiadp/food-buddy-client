import React, {  useState } from 'react';
import { AuthContext } from './Authcontext';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';


const AuthProvider = ({children}) => {

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>{
   setLoading(true);
   return createUserWithEmailAndPassword( auth, email, password)

  };




  
  
  
  
  const authInf = {

    loading,
    createUser,
  } 
   
    return (
        <AuthContext value={authInf}>
          {children}
        </AuthContext>
    );
};

export default AuthProvider;