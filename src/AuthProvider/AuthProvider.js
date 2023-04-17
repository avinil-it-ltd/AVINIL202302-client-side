import React from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { createContext } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext  = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
   const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
   }
    const authInfo = {createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;