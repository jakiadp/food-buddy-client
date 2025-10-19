import React from 'react';
import { AuthContext } from './Authcontext';

const AuthProvider = ({children}) => {
  const authInf = {

  } 
   
    return (
        <AuthContext value={authInf}>
          {children}
        </AuthContext>
    );
};

export default AuthProvider;