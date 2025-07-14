import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AUTH } from '../config/firebase.init';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);


  const createUser = (email, password) => { 
    return createUserWithEmailAndPassword(AUTH, email, password)
    
  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(AUTH, email, password);
  }

  const signOutUser = () => {
    return AUTH.signOut();
  }

 
  useEffect( () => {
    const unSubscribe = onAuthStateChanged(AUTH, (currentUser) => {
      if (currentUser) {
        console.log('User is signed in:', currentUser);
         setUser(currentUser);
      } else {
        console.log('No user is signed in');
      }
     
    });
    return () => {
      unSubscribe(); 
    }
  }, [])

  
    

  const authInfo = {
    user,
    createUser,
    signInUser,
    signOutUser,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>
        {/* Children components will be rendered here */}
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
